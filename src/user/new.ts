import { ISOCountryCode, Schema } from "@korusbyanthm/types";
import { httpClient } from "..";
import { AxiosResponse } from "axios";
import regex from "@korusbyanthm/regex";

export default async (
    username: string,
    birthday: Date,
    email: string,
    password: string,
    name: string,
    country: ISOCountryCode,
    phoneNumber?: string
): Promise<{
    data: Schema.Self.User,
    token: string,
    req: AxiosResponse
}> => {
    // Verify all fields
    const usernameValidity = regex.username(username);
    if (username && !usernameValidity) throw new Error(`username is invalid`);

    const birthdayValidity = regex.birthday(birthday);
    if (birthday && !birthdayValidity) throw new Error(`birthday is invalid`);

    const emailValidity = regex.email(email);
    if (email && !emailValidity) throw new Error(`email is invalid`);

    const passwordValidity = regex.password(password);
    if (password && !passwordValidity) throw new Error(`password is invalid`);

    const countryValidity = regex.country(country);
    if (country && !countryValidity) throw new Error(`country is invalid`);

    const phoneNummberValidity = regex.phoneNummber(phoneNumber);
    if (phoneNumber && !phoneNummberValidity) throw new Error(`phoneNummber is invalid`);

    // URL encode all fields
    const data = new URLSearchParams();
    if (username) data.set("username", username);
    if (birthday) data.set("birthday", birthday.getTime().toString());
    if (email) data.set("email", email);
    if (password) data.set("password", password);
    if (name) data.set("name", name);
    if (country) data.set("country", country);
    if (phoneNumber) data.set("phoneNumber", phoneNumber);

    const req = await httpClient.post("/user/new", data);

    return {
        req,
        data: req.data.data satisfies Schema.Self.User,
        token: req.data.token as string
    };
};