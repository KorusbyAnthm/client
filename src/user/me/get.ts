import { Schema } from '@korusbyanthm/types';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { httpClient } from '../..';
import { authenticate } from '../../utils';
import KorusError from '../../KorusError';

/**
 * @throws {KorusError}
 */
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

    if (req.data?.error) throw new KorusError(req.status, req.data?.error?.message, req.data?.error?.userFriendlyMessage, req.data?.error?.code, false);

    return {
        req,
        data: req.data
    }
};