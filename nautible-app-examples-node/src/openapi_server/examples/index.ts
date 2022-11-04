/* eslint-disable */
// tslint:disable
/**
 * nautible-app-examples API
 * nautible examples Service
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import healthCheckService from './api/healthCheckService'
import restExamplesService from './api/restExamplesService'
import * as t from './types'

export default function(app: Express, impl: t.ApiImplementation) {
	healthCheckService(app, impl.healthCheckService)
	restExamplesService(app, impl.restExamplesService)
}