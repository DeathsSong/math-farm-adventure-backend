require('dotenv').config()
const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.apngf9e.mongodb.net/MathFarmAdventure?retryWrites=true&w=majority`;
console.log(process.env.DB_USER);
const PORT = process.env.PORT || 5000;

module.exports = {DATABASE_URL, PORT};