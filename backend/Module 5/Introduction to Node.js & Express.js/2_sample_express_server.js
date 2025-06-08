// 2_sample_express_server.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Export the app for testing
module.exports = app;

// Only start server if this file is run directly
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}
