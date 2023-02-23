"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = void 0;
function sendErrorResponse(error, _request, response, _next) {
    var _a;
    const status = (_a = error.status) !== null && _a !== void 0 ? _a : 500;
    response.status(status).json({
        message: error.message,
        errors: error.errors,
    });
}
exports.sendErrorResponse = sendErrorResponse;
