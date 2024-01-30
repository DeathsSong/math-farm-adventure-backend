//Creat admin login route
//admin can create, edit, and delete questions and answers
//Just make route accesible via address bar

// const problemSchema = new mongoose.Schema({
//     question: { type: String, required: true },
//     options: { type: [String], required: true },
//     correctOption: { type: Number, required: true },
//     problemType: { type: String, required: true}
//   });



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
    console.log('You have reached the admin POST route');
    console.log(req.body);

    try {
        const { question, options, correctOption, problemType } = req.body;
        // Validate the required fields
        if (!question || !options || !correctOption || !problemType) {
          return res.status.json({ error: 'Missing required field' });
        }
        const createProblem = await Problem.create({
            question,
            options,
            correctOption,
            problemType,
      });
        res.json(createProblem);
    } catch (error) {
      console.error('Cannot create new problem 😢');
    }
  });




//Update/change a problem
router.put('/admin/problems/:id', async (req, res) => {
    console.log('You have reached the PUT route');
    console.log(req.body);
    try {
        const {id} = req.params;
        const { question, options, correctOption, problemType } = req.body;
        // Validate the required fields
        if (!question || !options || !correctOption || !problemType) {
            return res.status.json({ error: 'Missing required field' });
        }
        const updateProblem = await Problem.findByIdAndUpdate(
            id,
            { question, options, correctOption, problemType },
            { new: true }
        );
        if (!updateProblem) {
            return res.status.json({ error: 'Problem not found' });
        }
        console.log(`${id} has been updated`);
        res.json(updateProblem);
    } catch (error) {
        console.error('Cannot update problem 😢');
    }
});


//Delete a problem
router.delete('/admin/problems/:id', async (req, res) => {
    console.log('You have reached the admin DELETE route');
    console.log(req.body);
    try {
        const {id} = req.params;
        const deleteProblem = await Problem.findByIdAndDelete(id);
            if (!deleteProblem) {
            return res.status.json('Issue deleting problem');
            }
            res.json(deleteProblem);
            console.log(`${id} has been deleted`);
    } catch (error) {
        console.error('Cannot delete problem 😢');
    }
});

module.exports = router;