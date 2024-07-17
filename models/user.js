const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  score: Number,
  topics: [String],
  achievements: [String],
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);
