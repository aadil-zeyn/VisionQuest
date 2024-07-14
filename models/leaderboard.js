const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  score: Number,
  rank: Number,
}, { versionKey: false });

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
