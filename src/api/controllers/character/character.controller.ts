import { Request, Response } from 'express';
import marvelAxiosInstance from '../../../config/marvel-axios.config';
import Logger from '../../../lib/logger';
import { writeJsonResponse } from '../../../utils/json-response';
import { RootObjectResponse } from '../model/character/character-response.model';

export async function getAllCharacters(req: Request, res: Response) {
    marvelAxiosInstance.get<RootObjectResponse>('/characters', {
        params: {
            nameStartsWith: req.query.name,
            ...(req.query.offset ? { offset: req.query.offset } : {}),
            ...(req.query.orderBy ? { orderBy: req.query.orderBy } : {})
        }
    })
        .then(characters => {
            Logger.http(characters.data);
            writeJsonResponse(res, 200, characters.data)
        })
        .catch(err => {
            Logger.error("Error on getAllCharacters");
            writeJsonResponse(res, 500, { error: { type: 'internal_server_error', message: 'Internal Server Error' } })
        })
}
