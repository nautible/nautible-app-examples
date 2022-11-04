import healthCheckService from './openapi_server/examples/impl/healthCheckService'
import restExamplesService from './openapi_server/examples/impl/restExamplesService'
import examples from './openapi_server/examples/index'
import server from './server'

const srv = new server()

// API設定
srv.addApiImplementation(examples, {
  healthCheckService,
  restExamplesService
})

// サーバ起動
srv.start()
