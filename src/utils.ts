import regex from "@korusbyanthm/regex";
import { AxiosBasicCredentials } from 'axios';

export const getIdentifierType = (identifier: string) => {
    return (
        regex.id(identifier) ? "id" : 
        regex.email(identifier) ? "email" : 
        regex.username(identifier) ? "username" : 
        regex.phoneNummber(identifier) ? "phoneNumber" : null
    );
};

/**
 * Returns the correct `Authorization` header
 */
export const authenticate = (auth: AxiosBasicCredentials | string): string => {
    const authType = 
        typeof auth === "string" ?
        // If auth is string (jwt) use Bearer auth
        "Bearer":
        // If auth object, use Basic base64(username:password) auth
        "Basic"; 

    const authString = `${authType} ${
        authType === "Basic" ?
        // Convert to base 64 encoded username:password
        Buffer.from(`${(auth as AxiosBasicCredentials).username}:${(auth as AxiosBasicCredentials).password}`).toString("base64") :
        // Use jwt string
        auth
    }`;

    return authString;
}