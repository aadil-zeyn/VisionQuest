import { Schema, model } from 'mongoose';

const challengSetSchema = new Schema({
  title: String,
  domain: String,
  description: String,
  challengesList: [{
    type: Schema.Types.ObjectId,
    ref: 'Challenge',
    required: true
  }]
}, { versionKey: false });

export default model('ChallengeSet', challengSetSchema);
