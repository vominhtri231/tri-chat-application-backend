import bodyParser from 'body-parser';
import cors from 'cors';

export default (app, routes, apiConfig) => {
  app.use(bodyParser.json())
  app.use(cors())
  app.use(apiConfig.prefix, routes)
  app.listen(apiConfig.port, () => {
    console.log(`app is running on PORT ${apiConfig.port}`)
  })
}
