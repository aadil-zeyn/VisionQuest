const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
  created_at: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('Questions', questionSchema);
