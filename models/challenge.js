import { Schema, model } from 'mongoose';

const challengeSchema = new Schema({
  title: String,
  description: String,
  topic: String,
}, { versionKey: false });

export default model('Challenge', challengeSchema);
