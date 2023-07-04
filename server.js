// server.js
const express = require('express');
const app = express();

// Define your routes and API endpoints here
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});