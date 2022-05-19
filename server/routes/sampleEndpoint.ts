import express from 'express'

export const sampleEndpointRouter = express.Router()

sampleEndpointRouter.get('/', (req, res) => {
    res.json({
        msg: "Hello world"
    })
})
