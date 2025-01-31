const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
 // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Failed to connect:', err));

// Serve static files
app.use(express.static('static'));

// Route to serve HTML page
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
