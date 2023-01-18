import { AxiosBasicCredentials } from 'axios';
export declare const getIdentifierType: (identifier: string) => "id" | "username" | "email" | "phoneNumber";
/**
 * Returns the correct `Authorization` header
 */
export declare const authenticate: (auth: AxiosBasicCredentials | string) => string;
