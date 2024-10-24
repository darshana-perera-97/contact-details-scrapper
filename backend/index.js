// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic /api route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the basic API!' });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
