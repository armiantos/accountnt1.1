import { InventoryItem } from '@prisma/client';
import request from 'supertest';

import { app } from '../app';
import { prisma } from '../prisma/client';
import { apples } from '../prisma/fixtures/inventoryItem';
import { bob } from '../prisma/fixtures/user';

describe('inventory', () => {
    beforeAll(async () => {
        await prisma.user.create({
            data: {
                ...bob,
                inventoryItems: {
                    create: apples,
                },
            },
        });
    });

    afterAll(async () => {
        await prisma.user.delete({ where: { id: bob.id } });
    });

    it('GET / returns mock inventory items', async () => {
        const response = await request(app).get('/api/v1/inventory').expect(200);
        const body: [InventoryItem] = response.body;

        expect(body.length).toEqual(1);
        const apple = body.find((item) => item.name == apples.name);
        expect(apple).not.toBeUndefined();
    });
});
