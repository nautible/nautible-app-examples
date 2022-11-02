import * as t from '../api/healthCheckService/types'
import { Api } from '../models'

async function healthz (): Promise<t.HealthzResponse> {
  return {
    status: 200,
    body: 'Health Check OK'
  }
}

const api: t.HealthCheckServiceApi = {
  healthz
}

export default api
