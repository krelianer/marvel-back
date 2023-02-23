import express from "express";

import { validateInputs } from "../../pre-request-handlers/openapi";
import { getAllCharacters } from "./character/character.controller";
export const allRoute = express.Router();

// Validating inputs before all todo controllers
allRoute.use(validateInputs);

allRoute.get('/characters', getAllCharacters)