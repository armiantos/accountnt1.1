import { auth } from 'express-oauth2-jwt-bearer';

import { auth0Config } from './config';

export const authenticator = auth({
    audience: auth0Config.audience,
    issuerBaseURL: auth0Config.issuer,
});
