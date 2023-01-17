"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.getIdentifierType = void 0;
const regex_1 = __importDefault(require("@korusbyanthm/regex"));
const getIdentifierType = (identifier) => {
    return (regex_1.default.id(identifier) ? "id" :
        regex_1.default.email(identifier) ? "email" :
            regex_1.default.username(identifier) ? "username" :
                regex_1.default.phoneNummber(identifier) ? "phoneNumber" : null);
};
exports.getIdentifierType = getIdentifierType;
/**
 * Returns the correct `Authorization` header
 */
const authenticate = (auth) => {
    const authType = typeof auth === "string" ?
        // If auth is string (jwt) use Bearer auth
        "Bearer" :
        // If auth object, use Basic base64(username:password) auth
        "Basic";
    const authString = `${authType} ${authType === "Basic" ?
        // Convert to base 64 encoded username:password
        Buffer.from(`${auth.username}:${auth.password}`).toString("base64") :
        // Use jwt string
        auth}`;
    return authString;
};
exports.authenticate = authenticate;
