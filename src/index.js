const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const config = require('./config')
const routes = require('./routes')

const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use('/api', routes)

app.listen(config.port, () => {
  console.log(`app is running on PORT ${config.port}`)
})

module.exports = app
