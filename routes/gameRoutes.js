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



// Retrieve the game status
router.get('/game', async (req, res) => {
  try {
    const gameStatus = await Game.findOne();

    if (gameStatus) {
      res.json({
        barnComplete: gameStatus.barnComplete,
        cropComplete: gameStatus.cropComplete,
        chickenComplete: gameStatus.chickenComplete,
        penComplete: gameStatus.penComplete,
      });
    } else {
      res.status(404).json({ success: false, message: 'Game not found' });
    }
  } catch (error) {
    console.error('Failed to fetch game status:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});




//Try to update barnComplete to true
router.post('/barnComplete', async (req, res) => {
  console.log('You have reached the barnComplete route');

  try {
    await Game.findOneAndUpdate(
      { barnComplete: true },
    );
    res.json({ success: true, message: 'Barn status updated successfully' });
  } catch (error) {
    console.error('Failed to update barnComplete:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


//update chickenComplete to true
router.post('/chickenComplete', async (req, res) => {
  console.log('You have reached the chickenComplete route');

  try {
    await Game.findOneAndUpdate(
      { chickenComplete: true },
    );
    res.json({ success: true, message: 'Chicken status updated successfully' });
  } catch (error) {
    console.error('Failed to update chickenComplete:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//update cropComplete to true
router.post('/cropComplete', async (req, res) => {
  console.log('You have reached the cropComplete route');

  try {
    await Game.findOneAndUpdate(
      { cropComplete: true },
    );
    res.json({ success: true, message: 'Crop status updated successfully' });
  } catch (error) {
    console.error('Failed to update cropComplete:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
