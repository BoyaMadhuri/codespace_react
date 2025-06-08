// Installing MySQL Package and Creating a Connection in Node.js
// Description: install the MySQL3 package(use latest one), and create a connection to MySQL.
// Create a database and create a Student table// 1_mysql_connection.js

const mysql = require('mysql3');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',       // Replace with your host if different
  user: 'root',            // Replace with your MySQL username
  password: '',            // Replace with your MySQL password
  database: 'testdb'       // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Optional: Close the connection after use
// connection.end();
