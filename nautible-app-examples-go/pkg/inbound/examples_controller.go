package inbound

import (
	"fmt"
	"net/http"
	"sync"
)

type ExamplesController struct {
	Lock sync.Mutex
}

func NewExamplesController() *ExamplesController {
	return &ExamplesController{}
}

func (p *ExamplesController) Healthz(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Health Check OK")
}

func (p *ExamplesController) Hello(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "hello")
}
