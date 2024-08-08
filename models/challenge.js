import { Schema, model } from 'mongoose';

const testcaseSchema = new Schema({
  input: String,
  expectedOutput: String
}, { _id: false })

const challengeSchema = new Schema({
  title: String,
  description: String,
  boilerplateCode: String,
  visibleTestCases: [testcaseSchema],

  hiddenTestCases: [testcaseSchema],
  topic: String,
}, { versionKey: false });

export default model('Challenge', challengeSchema);
