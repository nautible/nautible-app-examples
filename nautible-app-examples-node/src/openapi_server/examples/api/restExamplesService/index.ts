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
import passport from 'passport'
import * as t from './types'
import * as v from '../../validation'
import { Api } from '../../models'

export default function(app: Express, impl: t.RestExamplesServiceApi) {
	app.get(
		'/examples/hello',
		function (req, res) {
			try {
				impl.hello().then(function (response) {
					if (response.status === 200) {
						let body: any
						try {
							body = v.stringToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in restExamplesService.hello', error)
							res.status(500)
							res.send()
							return
						}

						res.status(200)
						res.send(body)
						return
					}

					console.log('Unsupported response in restExamplesService.hello', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in restExamplesService.hello', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

}
