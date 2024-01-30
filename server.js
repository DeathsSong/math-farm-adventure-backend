//server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { DATABASE_URL, PORT } = require("./config");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());



// Routes
const gameRoutes = require('./routes/gameRoutes');
const problemRoutes = require('./routes/problemRoutes');
const adminRoutes = require('./routes/adminRoutes')

app.use('/api', gameRoutes);
app.use('/api', problemRoutes);
app.use('/api', adminRoutes);

//start sever

const startServer = async () => {
  await mongoose.connect(DATABASE_URL);

  app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT} 🎧`);
  });
};

startServer();
