import { Schema } from '@korusbyanthm/types';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { httpClient } from '../..';
import { authenticate } from '../../utils';

export default async (
    auth: AxiosBasicCredentials | string
): Promise<{
    data: Schema.Self.User,
    req: AxiosResponse
}> => {
    const authString = authenticate(auth);

    const req = await httpClient.get("/user/me", {
        headers: { Authorization: authString }
    });

    return {
        req,
        data: req.data
    }
};