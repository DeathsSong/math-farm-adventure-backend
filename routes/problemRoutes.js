// problemRoutes.js
const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

// Get a random problem by type
router.get('/problems/:problemType/random', async (req, res) => {
  try {
    const { problemType } = req.params;

    const problems = await Problem.find({ problemType });
    const randomIndex = Math.floor(Math.random() * problems.length);
    const randomProblem = problems[randomIndex];

    res.json(randomProblem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
