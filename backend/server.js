const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET endpoint to test the server
app.get('/', (req, res) => {
  res.send('Welcome to the Trust Tracker Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});