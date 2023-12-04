// server.js
const fs = require("fs");
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config();
const app = express();

app.use(cors())
// Define your routes and API endpoints here
const port = process.env.PORT || 5000;

// parse requests of content-type: application/json
app.use(bodyParser.json({ limit: "250mb" }));

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "250mb", extended: true }));

fs.readdirSync("./routes").forEach((file) => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  if (file.includes(".js")) require(`./routes/${file}`)(app);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});