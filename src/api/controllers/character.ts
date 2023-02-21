import * as express from 'express'

import { writeJsonResponse } from '@marvel/utils/express'
import marvelAxiosInstance from '@marvel/service/marvel_axios_config'
import logger from '@marvel/utils/logger'
import { RootObjectResponse } from '../models/character_response';


export function getAllCharacter(req: express.Request, res: express.Response): void {
    marvelAxiosInstance.get<RootObjectResponse>('/characters', {
        params: {
            nameStartsWith: req.query.name,
            ...(req.query.offset ? { offset: req.query.offset } : {}),
            ...(req.query.orderBy ? { orderBy: req.query.orderBy } : {})
        }
    })
        .then(characters => {
            writeJsonResponse(res, 200, characters.data)
        })
        .catch(err => {
            logger.error(`<auth>: ${err}`)
            writeJsonResponse(res, 500, { error: { type: 'internal_server_error', message: 'Internal Server Error' } })
        })
}

export function getCharacterById(req: express.Request, res: express.Response): void {
    const name = req.query.name || 'stranger'
    writeJsonResponse(res, 200, { "message": `Hello, ${name}!` })
}



