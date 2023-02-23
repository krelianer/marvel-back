"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Set config defaults when creating the instance
const marvelAxiosInstance = axios_1.default.create({
    baseURL: process.env.MARVEL_PUBLIC_API
});
// Alter defaults after instance has been created
marvelAxiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
marvelAxiosInstance.interceptors.request.use(function (config) {
    var pubkey = process.env.MARVEL_PUBLIC_KEY;
    var pvtkey = process.env.MARVEL_PRIVATE_KEY;
    var ts = new Date().getTime();
    // Marvel api md5 hash timestamp + privateKey + publicationKey
    var MD5 = require("crypto-js/md5");
    var stringToHash = ts + pvtkey + pubkey;
    var hash = MD5(stringToHash);
    config.params = Object.assign(Object.assign({}, config.params), { ts: ts, apikey: pubkey, hash: hash });
    return config;
});
exports.default = marvelAxiosInstance;
