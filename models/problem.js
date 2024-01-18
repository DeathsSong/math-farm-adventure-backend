const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: Number, required: true },
  // Add more fields as game grows
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;