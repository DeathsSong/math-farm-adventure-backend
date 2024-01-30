//Creat admin login route
//admin can create, edit, and delete questions and answers
//Just make route accesible via address bar

const express = require('express');
const router = express.Router();
const Game = require('../models/game');
const Problem = require('../models/problem');

//SHow existing problems
router.get('/admin/problems', async(req, res) => {
    console.log('You have reached the admin GET route');
    console.log(req.body);

    const showProblems = await Problem.find();

    res.json(showProblems)
});


//Make a new problem
router.post('/admin/problems', async(req, res) => {

});


//Update/change a problem
router.put('/admin/problems', async (req, res) => {

});


//Delete a problem
router.delete('/admin/problems', async (req, res) => {

});

module.exports = router;