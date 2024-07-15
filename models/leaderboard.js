const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  name: String,
  score: Number,
  rank: Number,
  topic: String
}, { versionKey: false });

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
