import bodyParser from 'body-parser'
import express from 'express'
import { OpenApiValidator } from 'express-openapi-validator'
import { Express } from 'express-serve-static-core'
import morgan from 'morgan'
import morganBody from 'morgan-body'
import { connector } from 'swagger-routes-express'
import YAML from 'yamljs'

import * as api from '@marvel/api/controllers'
import config from '@marvel/config'
import { expressDevLogger } from '@marvel/utils/express_dev_logger'
import logger from '@marvel/utils/logger'

export async function createServer(): Promise<Express> {
  const server = express()

  // Add CORS management
  var cors = require('cors')
  server.use(cors());

  server.use(bodyParser.json())

  // Login configuration
  if (config.morganLogger) {
    server.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
    morganBody(server)
  }

  if (config.morganBodyLogger) {
    morganBody(server)
  }

  if (config.marvelDevLogger) {
    console.log("Marvel logger active")
    server.use(expressDevLogger)
  }

  // setup API validator
  const yamlSpecFile = './config/openapi.yml'
  const apiDefinition = YAML.load(yamlSpecFile)
  const validatorOptions = {
    coerceTypes: true,
    apiSpec: yamlSpecFile,
    validateRequests: true,
    validateResponses: true
  }
  await new OpenApiValidator(validatorOptions).install(server)

  // error customization, if request is invalid
  server.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status).json({
      error: {
        type: 'request_validation',
        message: err.message,
        errors: err.errors
      }
    })
  })

  const connect = connector(api, apiDefinition, {
    onCreateRoute: (method: string, descriptor: any[]) => {
      descriptor.shift()
      logger.verbose(`${method}: ${descriptor.map((d: any) => d.name).join(', ')}`)
    },
    security: {
      bearerAuth: api.auth
    }
  })
  connect(server)

  return server
}
