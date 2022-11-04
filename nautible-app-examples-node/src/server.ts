import express, { Express } from 'express'
import expressWinston, { LoggerOptions, ErrorLoggerOptions } from 'express-winston'
import { TimestampOptions } from 'logform'
import winston, { Logger } from 'winston'

class Server {
  private port: number = Number(process.env.PORT) || 8080
  private logLevel: string = process.env.LOG_LEVEL || 'info'
  private timestampOptions: TimestampOptions = {
    format: 'YYYY-MM-DD HH.mm:ss.SSS'
  }

  private logFormatJson = winston.format.printf(info => {
    if (process.env.NODE_ENV === 'production') {
      return JSON.stringify(info)
    }
    return JSON.stringify(info, null, 4)
  })

  private app: Express
  private logger: Logger

  constructor () {
    // Express
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    // ログ設定
    this.app.use(expressWinston.logger(this.getExpressLoggerOptions()))
    this.app.use(expressWinston.errorLogger(this.getExpressErrorLoggerOptions()))

    // Logger
    this.logger = winston.createLogger({
      level: this.logLevel.toLowerCase(),
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(this.timestampOptions),
        winston.format.splat(),
        winston.format.json(),
        this.logFormatJson
      ),
      transports: [new winston.transports.Console()]
    })
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  addApiImplementation = (func: Function, impl: object) => {
    func(this.app, impl)
  }

  start = () => {
    this.app.listen(this.port, () => {
      this.logger.debug(`listening on ${this.port}`)
    })
  }

  private getExpressLoggerOptions = (): LoggerOptions => {
    return {
      format: winston.format.combine(
        winston.format.timestamp(this.timestampOptions),
        winston.format.splat(),
        winston.format.json(),
        this.logFormatJson
      ),
      transports: [new winston.transports.Console()]
    }
  }

  private getExpressErrorLoggerOptions = (): ErrorLoggerOptions => {
    return {
      format: winston.format.combine(
        winston.format.timestamp(this.timestampOptions),
        winston.format.splat(),
        winston.format.json(),
        this.logFormatJson
      ),
      transports: [new winston.transports.Console()]
    }
  }
}

export default Server
