import request from 'supertest';
import { app } from '../app';

describe('sampleEndpoint', () => {
    it('GET / returns Hello world', async () => {
        const response = await request(app).get('/api/v1/sample_endpoint').expect(200);
        expect(response.body).toEqual({ msg: 'Hello world' });
    });
});
