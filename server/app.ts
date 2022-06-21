import express from 'express';
import { authenticator } from './middlewares';
import { inventoryRouter } from './routes/inventory';

export const app = express();

const apiRouter = express.Router();
apiRouter.use(authenticator);
apiRouter.use('/inventory', inventoryRouter);

app.use('/api/v1', apiRouter);
