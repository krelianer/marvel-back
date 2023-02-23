import path from "path";
import * as OpenApiValidator from "express-openapi-validator";

const spec = path.join("docs", "openapi.yaml");

export const validateInputs = OpenApiValidator.middleware({
    apiSpec: spec,
    validateRequests: true,
    validateResponses: true,
});