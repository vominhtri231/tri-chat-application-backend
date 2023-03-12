import expressLoader from "./configExpress.js";
import mongooseLoader from "./configMongoose.js";

const { API_PORT, API_PREFIX, MONGO_URI, MONGO_USER, MONGO_PASS, MONGO_DB_NAME } = process.env

const apiPort = API_PORT || 6001;
const apiPrefix = API_PREFIX || '/api'
const mongoUri = MONGO_URI || "mongodb://localhost:6018"
const mongoUser = MONGO_USER || "tri"
const mongoPass = MONGO_PASS || "tri231"
const mongoDbName = MONGO_DB_NAME || "chat-application"

const apiConfig = {
  port: apiPort,
  prefix: apiPrefix
}

const mongoConfig = {
  uri: mongoUri,
  user: mongoUser,
  pass: mongoPass,
  dbName: mongoDbName
}

export default async (app, routes) => {
  await mongooseLoader(mongoConfig)
  expressLoader(app, routes, apiConfig)
}
