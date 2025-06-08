// Understanding Middlewares
// Description: Write middleware in Express.js to log all incoming requests.

// Steps:
// 1. Update the current file with a logging middleware
// 2. Observe the console output to see logs of incoming requests.// 3_sample_middleware.js

const express = require('express');
const app = express();

// Middleware to log incoming requests
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware/route
});

// A test route
app.get('/', (req, res) => {
  res.send('Middleware test successful!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
