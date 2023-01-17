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
const __1 = require("..");
const regex_1 = __importDefault(require("@korusbyanthm/regex"));
exports.default = (username, birthday, email, password, name, country, phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    // Verify all fields
    const usernameValidity = regex_1.default.username(username);
    if (username && !usernameValidity)
        throw new Error(`username is invalid`);
    const birthdayValidity = regex_1.default.birthday(birthday);
    if (birthday && !birthdayValidity)
        throw new Error(`birthday is invalid`);
    const emailValidity = regex_1.default.email(email);
    if (email && !emailValidity)
        throw new Error(`email is invalid`);
    const passwordValidity = regex_1.default.password(password);
    if (password && !passwordValidity)
        throw new Error(`password is invalid`);
    const countryValidity = regex_1.default.country(country);
    if (country && !countryValidity)
        throw new Error(`country is invalid`);
    const phoneNummberValidity = regex_1.default.phoneNummber(phoneNumber);
    if (phoneNumber && !phoneNummberValidity)
        throw new Error(`phoneNummber is invalid`);
    // URL encode all fields
    const data = new URLSearchParams();
    if (username)
        data.set("username", username);
    if (birthday)
        data.set("birthday", birthday.getTime().toString());
    if (email)
        data.set("email", email);
    if (password)
        data.set("password", password);
    if (name)
        data.set("name", name);
    if (country)
        data.set("country", country);
    if (phoneNumber)
        data.set("phoneNumber", phoneNumber);
    const req = yield __1.httpClient.post("/user/new", data);
    return {
        req,
        data: req.data.data,
        token: req.data.token
    };
});
