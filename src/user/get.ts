import { PublicSafeKeys, Schema } from '@korusbyanthm/types';
import { AxiosResponse } from 'axios';
import { httpClient } from '..';
import { getIdentifierType } from '../utils';
export default async (
    identifier: string
): Promise<{
    data: Schema.Public.User,
    req: AxiosResponse
}> => {
    const identifierType = getIdentifierType(identifier);

    if (!PublicSafeKeys.Identifier.includes(identifierType as never)) throw new Error(`Cannot get user by ${identifierType} '${identifier}'`);

    const req = await httpClient.get(`/user/${identifier}`);

    return {
        data: req.data,
        req
    };
};