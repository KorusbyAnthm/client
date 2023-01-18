import { Schema } from '@korusbyanthm/types';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
declare const _default: (auth: AxiosBasicCredentials | string) => Promise<{
    data: Schema.Self.User;
    req: AxiosResponse;
}>;
export default _default;
