import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  score: Number,
  topics: [String],
  achievements: [String],
}, { versionKey: false });

export default model('User', userSchema);
