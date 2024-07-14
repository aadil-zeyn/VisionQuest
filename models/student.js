const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  topics: [String],
  achievements: [String],
}, { versionKey: false });

module.exports = mongoose.model('Student', studentSchema);
