const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  score: Number,
  rank: Number,
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
