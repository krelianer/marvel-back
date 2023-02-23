import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import fs from 'fs';
import cors from 'cors';

import { Express } from 'express-serve-static-core'

import { allRoute } from '../api/controllers/all.router';
import { sendErrorResponse } from '../error-handling/error-handler';
import Logger from '../lib/logger';



export async function createServer(): Promise<Express> {
    const server = express();
    const port = process.env.PORT;

    server.listen(port, () => {
        Logger.info(`[Marvel-back]: Server is running at http://localhost:${port}`);
    });



    // CORS
    server.use(cors())

    server.use(logger("dev"));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());

    // OpenAPI UI
    const file = fs.readFileSync('./docs/openapi.yaml', 'utf8');
    const swaggerDocument = YAML.parse(file);
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    Logger.info(`[Marvel-back]: OpenAPI documentation available at http://localhost:${port}/api-docs`);

    //Router
    server.use("/api/v1", allRoute);

    // Error handling
    server.use(sendErrorResponse);


    return server;
}