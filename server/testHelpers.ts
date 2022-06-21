import { Handler } from 'express';
import * as auth0 from 'express-oauth2-jwt-bearer';

export function bypassAuthChecks(mockUserId = 'bob') {
    const mockAuthenticator: Handler = (req, res, next) => {
        req.auth = {
            header: {},
            payload: {
                sub: mockUserId,
            },
            token: '',
        };
        next();
    };

    const authenticator = jest.spyOn(auth0, 'auth');
    authenticator.mockImplementationOnce(() => {
        return mockAuthenticator;
    });
}
