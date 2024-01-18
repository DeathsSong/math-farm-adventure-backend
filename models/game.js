const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  playerName: { type: String, required: true },
  farmName: { type: String, required: true },
  // Add more fields as game grows
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
