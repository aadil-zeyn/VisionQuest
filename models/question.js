import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  title: String,
  body: String,
  author: Schema.Types.ObjectId,
  created_at: { type: Date, default: Date.now },
}, { versionKey: false });

export default model('Questions', questionSchema);
