//gameRoutes.js
const express = require('express');
const router = express.Router();
const Game = require('../models/game');

// Create a new game
router.post('/games', async (req, res) => {
  try {
    const { playerName, farmName } = req.body;
    const newGame = new Game({ playerName, farmName });
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

// Get details of a single game
router.get('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const game = await Game.findById(id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found.' });
    }

    res.json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an existing game
router.patch('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { playerName } = req.body;

    const game = await Game.findByIdAndUpdate(id, { playerName }, { new: true });

    if (!game) {
      return res.status(404).json({ error: 'Game not found.' });
    }

    res.json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a game
router.delete('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const game = await Game.findByIdAndDelete(id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found.' });
    }

    res.json({ message: 'Game deleted successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
