import request from 'supertest';
import { app } from '../app';

describe('inventory', () => {
    it('GET / returns mock inventory items', async () => {
        const response = await request(app).get('/api/v1/inventory').expect(200);
        expect(response.body).toEqual([]);
    });
});
