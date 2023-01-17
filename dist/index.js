"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.Korus = exports.ksrt = exports.regex = exports.httpClient = void 0;
// Axios import for creating instance
const axios_1 = __importDefault(require("axios"));
// Korus library imports
const regex_1 = __importDefault(require("@korusbyanthm/regex"));
exports.regex = regex_1.default;
const ksrt_1 = __importDefault(require("@korusbyanthm/ksrt"));
exports.ksrt = ksrt_1.default;
// Import handlers
const get_1 = __importDefault(require("./user/get"));
const new_1 = __importDefault(require("./user/new"));
const get_2 = __importDefault(require("./user/me/get"));
// Import config
const config_1 = __importDefault(require("./config"));
exports.config = config_1.default;
// Create axios http client with base URL and client header
const httpClient = axios_1.default.create({ baseURL: config_1.default.endpoint });
exports.httpClient = httpClient;
// Build handlers into an object
const Korus = {
    user: {
        get: get_1.default,
        new: new_1.default,
        me: {
            get: get_2.default
        }
    }
};
exports.Korus = Korus;
exports.default = Korus;
