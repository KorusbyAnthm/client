export default class KorusError extends Error {
    httpCode: number;
    message: string;
    userFriendlyMessage: string | null;
    code: string;
    silent: boolean = false;

    constructor(
        httpCode: number,
        message: string,
        userFriendlyMessage: string | null,
        code: string,
        silent: boolean = false
    ) {
        super(`Korus.${code}, HTTP${httpCode}, ${message}`);

        this.httpCode = httpCode;
        this.message = message;
        this.userFriendlyMessage = userFriendlyMessage;
        this.code = code;
        this.silent = silent;
    };
};