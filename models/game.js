const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  playerName: { type: String, required: true },
  farmName: { type: String, required: true },
  barnComplete: { type: Boolean, default: false },
  cropComplete: { type: Boolean, default: false },
  chickenComplete: { type: Boolean, default: false },
  penComplete: { type: Boolean, default: false},
});

//add game status of if areas are completed
//When complete, set to true, nav to game page
//Test if true - add some easy text to display
//Same idea with GIFS!!!



const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
