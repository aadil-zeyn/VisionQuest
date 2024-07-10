const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  topic: String,
});

module.exports = mongoose.model('Challenge', challengeSchema);
