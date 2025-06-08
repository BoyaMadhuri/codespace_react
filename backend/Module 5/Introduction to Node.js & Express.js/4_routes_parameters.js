// Implementing Routes with Parameters in Express.js
// Description: Create an Express route that accepts a parameter and respond accordingly.// 4_routes_parameters.js

const express = require('express');
const app = express();

// Route with parameter (e.g., /hello/John)
app.get('/hello/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}!`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
