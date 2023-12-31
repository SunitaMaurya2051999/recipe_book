const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});
// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log(`Successfully connected with ${process.env.DB} database.`);
});

module.exports = connection;