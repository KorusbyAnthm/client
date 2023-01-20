import { PublicSafeKeys, Schema } from '@korusbyanthm/types';
import { AxiosResponse } from 'axios';
import { httpClient } from '..';
import { getIdentifierType } from '../utils';
import KorusError from '../KorusError';

/**
 * @throws {KorusError}
 */
export default async (
    identifier: string
): Promise<{
    data: Schema.Public.User,
    req: AxiosResponse
}> => {
    const identifierType = getIdentifierType(identifier);

    if (!PublicSafeKeys.Identifier.includes(identifierType as never)) throw new Error(`Cannot get user by ${identifierType} '${identifier}'`);

    const req = await httpClient.get(`/user/${identifier}`);

    if (req.data?.error) throw new KorusError(req.status, req.data?.error?.message, req.data?.error?.userFriendlyMessage, req.data?.error?.code, false);

    return {
        data: req.data,
        req
    };
};