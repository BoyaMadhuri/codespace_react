// Creating a Simple Express Server
// Description: Write a simple Express server that listens on port 3000.// 2_sample_express_server.js

// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
