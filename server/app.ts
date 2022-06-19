import express from 'express';

import { sampleEndpointRouter } from './routes/sampleEndpoint';

export const app = express();

const apiRouter = express.Router();
apiRouter.use('/sample_endpoint', sampleEndpointRouter);

app.use('/api/v1', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
