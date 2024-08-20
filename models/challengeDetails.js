import { Schema, model } from 'mongoose';

const testcaseSchema = new Schema({
  input: String,
  expectedOutput: String
}, { _id: false })

const challengeDetailsSchema = new Schema({
  challengeId: {
        type: Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true
      },
  boilerplateCode: String,
  visibleTestCases: [testcaseSchema],

  hiddenTestCases: [testcaseSchema],
  topic: String,
}, { versionKey: false });

export default model('challengeDetails', challengeDetailsSchema);
