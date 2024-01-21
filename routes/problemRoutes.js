//problemRoutes.js
const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

// Create a new problem
router.post('/problems', async (req, res) => {
  try {
    const { question, options, correctOption } = req.body;
    const newProblem = new Problem({ question, options, correctOption });
    await newProblem.save();
    res.status(201).json(newProblem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all problems
router.get('/problems', async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
