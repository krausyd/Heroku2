// Import Express.js
const express = require('express');
// Initialize an instance of Express.js
const app = express();
// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello from Heroku World!'));

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);