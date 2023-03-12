import mongoose from "mongoose";
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    require: true
  }
})

export default model('User', userSchema)
