import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { port } from './config/index.js';
import routes from './routes/index.js';

const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use('/api', routes)

app.listen(port, () => {
  console.log(`app is running on PORT ${port}`)
})

export default app
