import { Schema, model } from 'mongoose';

const languageSchema = new Schema({
  name: String,
  score: Number
})

const userSchema = new Schema({
  name: String,
  email: String,
  uid: String,
  languages: [languageSchema],
  achievements: [String],
}, { versionKey: false });

export default model('User', userSchema);
