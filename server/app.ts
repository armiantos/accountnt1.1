import express from 'express'

import {sampleEndpointRouter} from './routes/sampleEndpoint'

const app = express()
const port = 3001

const apiRouter = express.Router()
apiRouter.use('/sample_endpoint', sampleEndpointRouter)

app.use('/api/v1', apiRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
