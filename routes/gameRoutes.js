const express = require('express');
const router = express.Router();
const Game = require('../models/game');

// Create a new game
router.post('/games', async (req, res) => {
  try {
    const { playerName } = req.body;
    const newGame = new Game({ playerName });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all games
router.get('/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
