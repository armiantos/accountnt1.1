const auth0Config = {
    audience: process.env.AUTH0_AUDIENCE || '',
    issuer: process.env.AUTH0_ISSUER || '',
};

export { auth0Config };
