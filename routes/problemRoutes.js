// problemRoutes.js
const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

// Get problems by type
router.get('/problems/:problemType', async (req, res) => {
  try {
    const { problemType } = req.params;

    // Fetch problems based on type from the database
    const problems = await Problem.find({ problemType });

    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
