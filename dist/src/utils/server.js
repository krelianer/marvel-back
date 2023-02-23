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
exports.createServer = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const all_router_1 = require("../api/controllers/all.router");
const error_handler_1 = require("../error-handling/error-handler");
const logger_1 = __importDefault(require("../lib/logger"));
function createServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = (0, express_1.default)();
        const port = process.env.PORT;
        server.listen(port, () => {
            logger_1.default.info(`[Marvel-back]: Server is running at http://localhost:${port}`);
        });
        // CORS
        server.use((0, cors_1.default)());
        server.use((0, morgan_1.default)("dev"));
        server.use(express_1.default.json());
        server.use(express_1.default.urlencoded({ extended: false }));
        server.use((0, cookie_parser_1.default)());
        // OpenAPI UI
        const file = fs_1.default.readFileSync('./docs/openapi.yaml', 'utf8');
        const swaggerDocument = yamljs_1.default.parse(file);
        server.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
        logger_1.default.info(`[Marvel-back]: OpenAPI documentation available at http://localhost:${port}/api-docs`);
        //Router
        server.use("/api/v1", all_router_1.allRoute);
        // Error handling
        server.use(error_handler_1.sendErrorResponse);
        return server;
    });
}
exports.createServer = createServer;
