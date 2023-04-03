import * as t from '../api/restExamplesService/types'
import { Api } from '../models'

async function hello (): Promise<t.HelloResponse> {
  return {
    status: 200,
    body: 'hello'
  }
}

const api: t.RestExamplesServiceApi = {
  hello
}

export default api
