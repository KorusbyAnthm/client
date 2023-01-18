import { ISOCountryCode, Schema } from "@korusbyanthm/types";
import { AxiosResponse } from "axios";
declare const _default: (username: string, birthday: Date, email: string, password: string, name: string, country: ISOCountryCode, phoneNumber?: string) => Promise<{
    data: Schema.Self.User;
    token: string;
    req: AxiosResponse;
}>;
export default _default;
