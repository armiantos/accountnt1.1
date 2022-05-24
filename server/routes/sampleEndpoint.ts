import express from 'express';

export const sampleEndpointRouter = express.Router();

let example;

sampleEndpointRouter.get('/', (req, res) => {
    res.json({
        msg: 'Hello world',
    });
});
