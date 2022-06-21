import { auth } from 'express-oauth2-jwt-bearer';

import { auth0Config } from './config';

export const requireAuth = auth({
    audience: auth0Config.audience,
    issuerBaseURL: auth0Config.issuer,
});
