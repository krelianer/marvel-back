"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/utils/server");
(0, server_1.createServer)()
    .then(server => { })
    .catch(err => {
    console.error(`Error: ${err}`);
});
