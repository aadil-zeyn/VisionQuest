import { Schema, model } from 'mongoose';

const challengeSchema = new Schema({
  challengeSetId:{
    type: Schema.Types.ObjectId,
    ref: 'ChallengeSet',
    required: true
  },
  title: String,
  description: String
}, { versionKey: false });

export default model('Challenge', challengeSchema);
