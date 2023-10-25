// server.js
const fs = require("fs");
const express = require('express');
require("dotenv").config();
const app = express();

// Define your routes and API endpoints here
const port = process.env.PORT || 5000;

fs.readdirSync("./routes").forEach((file) => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  if (file.includes(".js")) require(`./routes/${file}`)(app);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});