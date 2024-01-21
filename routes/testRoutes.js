//testRoutes.js
const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

router.get('/test-problems-database', async (req, res) => {
  try {
    const problems = await Problem.find();
    
    if (!problems || problems.length === 0) {
      return res.json({ message: 'No problems found in the database.' });
    }

    res.json({ message: 'Problems retrieved successfully!', problems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
