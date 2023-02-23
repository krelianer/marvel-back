"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterRoute = void 0;
const express_1 = __importDefault(require("express"));
const openapi_1 = require("../../pre-request-handlers/openapi");
exports.characterRoute = express_1.default.Router();
// Validating inputs before all todo controllers
exports.characterRoute.use(openapi_1.validateInputs);
