package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	server "github.com/nautible/nautible-app-examples/pkg/generate/examplesserver"
	controller "github.com/nautible/nautible-app-examples/pkg/inbound"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"

	middleware "github.com/deepmap/oapi-codegen/pkg/chi-middleware"
	"github.com/go-chi/chi/v5"
)

var target string // -ldflags '-X main.target=(aws|azure)'

func main() {
	logger, err := NewLogger(os.Getenv("LOG_LEVEL"), os.Getenv("LOG_FORMAT"))
	if err != nil {
		panic(err)
	}
	defer logger.Sync()
	zap.ReplaceGlobals(logger)

	var port = flag.Int("port", 8080, "Port for test HTTP server")
	flag.Parse()

	swagger, err := server.GetSwagger()
	if err != nil {
		zap.S().Errorw("Error loading swagger spec : " + err.Error())
		os.Exit(1)
	}

	swagger.Servers = nil

	controller := createController(target)

	r := chi.NewRouter()

	r.Use(middleware.OapiRequestValidator(swagger))

	server.HandlerFromMux(controller, r)

	s := &http.Server{
		Handler: r,
		Addr:    fmt.Sprintf("0.0.0.0:%d", *port),
	}
	log.Fatal(s.ListenAndServe())
}

func createController(target string) *controller.ExamplesController {
	controller := controller.NewExamplesController()
	return controller
}

func NewLogger(logLevel string, logFormat string) (*zap.Logger, error) {
	if logLevel == "" {
		logLevel = "DEBUG"
	}
	level, err := zap.ParseAtomicLevel(logLevel)
	if err != nil {
		panic(err)
	}
	if logFormat == "" {
		logFormat = "console"
	}
	config := zap.Config{
		OutputPaths:      []string{"stdout"},
		ErrorOutputPaths: []string{"stderr"},
		Level:            level,
		Encoding:         logFormat,
		EncoderConfig: zapcore.EncoderConfig{
			LevelKey:       "level",
			TimeKey:        "timestamp",
			CallerKey:      "caller",
			MessageKey:     "msg",
			EncodeLevel:    zapcore.CapitalLevelEncoder,
			EncodeTime:     zapcore.ISO8601TimeEncoder,
			EncodeDuration: zapcore.StringDurationEncoder,
			EncodeCaller:   zapcore.ShortCallerEncoder,
		},
	}

	logger, err := config.Build()
	if err != nil {
		return nil, err
	}
	return logger, nil
}
