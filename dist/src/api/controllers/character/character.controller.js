"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCharacters = void 0;
const marvel_axios_config_1 = __importDefault(require("../../../config/marvel-axios.config"));
const logger_1 = __importDefault(require("../../../lib/logger"));
const json_response_1 = require("../../../utils/json-response");
function getAllCharacters(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        marvel_axios_config_1.default.get('/characters', {
            params: Object.assign(Object.assign({ nameStartsWith: req.query.name }, (req.query.offset ? { offset: req.query.offset } : {})), (req.query.orderBy ? { orderBy: req.query.orderBy } : {}))
        })
            .then(characters => {
            logger_1.default.http(characters.data);
            (0, json_response_1.writeJsonResponse)(res, 200, characters.data);
        })
            .catch(err => {
            logger_1.default.error("Error on getAllCharacters");
            (0, json_response_1.writeJsonResponse)(res, 500, { error: { type: 'internal_server_error', message: 'Internal Server Error' } });
        });
    });
}
exports.getAllCharacters = getAllCharacters;
