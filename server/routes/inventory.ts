import express from 'express';
import { prisma } from '../prisma/client';

export const inventoryRouter = express.Router();

inventoryRouter.get('/', async (req, res) => {
    const inventoryItems = await prisma.inventoryItem.findMany();
    res.json(inventoryItems);
});
