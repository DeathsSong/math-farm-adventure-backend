const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: Number, required: true },
  problemType: { type: String, required: true}
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;