//gameRoutes.js
const express = require('express');
const router = express.Router();
const Game = require('../models/game');

// Create a new game
router.post('/game', async (req, res) => {
  console.log('You have reached the POST game route')
  console.log(req.body);

  const {playerName, farmName}=req.body
  const newGame = await Game.create({playerName, farmName});

  res.json (newGame)
});

module.exports = router;
