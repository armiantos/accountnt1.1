if (!process.env.AUTH0_AUDIENCE || !process.env.AUTH0_ISSUER) {
    throw new Error('Missing auth0 config');
}

const auth0Config = {
    audience: process.env.AUTH0_AUDIENCE || '',
    issuer: process.env.AUTH0_ISSUER || '',
};

export { auth0Config };
