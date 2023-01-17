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
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@korusbyanthm/types");
const __1 = require("..");
const utils_1 = require("../utils");
exports.default = (identifier) => __awaiter(void 0, void 0, void 0, function* () {
    const identifierType = (0, utils_1.getIdentifierType)(identifier);
    if (!types_1.PublicSafeKeys.Identifier.includes(identifierType))
        throw new Error(`Cannot get user by ${identifierType} '${identifier}'`);
    const req = yield __1.httpClient.get(`/user/${identifier}`);
    return {
        data: req.data,
        req
    };
});
