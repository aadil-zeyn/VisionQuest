import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema({
  userId: Schema.Types.ObjectId,
  name: String,
  score: Number,
  rank: Number,
  topic: String
}, { versionKey: false });

export default model('Leaderboard', leaderboardSchema);
