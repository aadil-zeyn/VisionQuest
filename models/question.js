const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: mongoose.Schema.Types.ObjectId,
  created_at: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('Questions', questionSchema);
