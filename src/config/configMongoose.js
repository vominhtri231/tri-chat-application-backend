import mongoose from "mongoose";

export default async (mongoConfig) => {
  await mongoose.connect(
    mongoConfig.uri,
    {
      user: mongoConfig.user,
      pass: mongoConfig.pass,
      dbName: mongoConfig.dbName
    }
  )
}
