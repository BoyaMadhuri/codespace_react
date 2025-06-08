// Error Handling Middleware in Express.js
// Description: Implement custom error handling middleware in an Express application.
// 5_error_handling_middleware.js

const express = require('express');
const app = express();

// Simulated route that triggers an error
app.get('/cause-error', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 500;
  next(error); // Pass error to middleware
});

// Custom error-handling middleware (must have 4 params)
app.use((err, req, res, next) => {
  console.error(`[Error] ${err.message}`);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
