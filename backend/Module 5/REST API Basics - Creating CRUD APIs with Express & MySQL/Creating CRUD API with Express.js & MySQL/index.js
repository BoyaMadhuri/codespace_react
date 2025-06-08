const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// A POST endpoint that receives JSON data
app.post('/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received JSON data:', receivedData);
  
  // Respond with a confirmation message and the received data
  res.json({
    message: 'JSON data received successfully!',
    data: receivedData
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
