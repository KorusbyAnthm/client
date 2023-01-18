import { Schema } from '@korusbyanthm/types';
import { AxiosResponse } from 'axios';
declare const _default: (identifier: string) => Promise<{
    data: Schema.Public.User;
    req: AxiosResponse;
}>;
export default _default;
