import express from 'express';

import { inventoryRouter } from './routes/inventory';

const app = express();
const port = 3001;

const apiRouter = express.Router();
apiRouter.use('/inventory', inventoryRouter);

app.use('/api/v1', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
