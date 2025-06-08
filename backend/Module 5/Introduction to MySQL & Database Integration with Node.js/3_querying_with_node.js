// Querying MySQL from Node.js Application
// Description: Write a Node.js script to query all students whose age is greater than 14 from the students table.// 3_querying_with_node.js

const mysql = require('mysql3');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',      // your MySQL password here
  database: 'testdb' // your database name here
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err.message);
    return;
  }
  console.log('Connected to MySQL!');
  
  // Query students with age > 14
  const query = 'SELECT * FROM students WHERE age > ?';
  connection.query(query, [14], (err, results) => {
    if (err) {
      console.error('Error querying data:', err.message);
    } else {
      console.log('Students with age > 14:', results);
    }
    
    // Close the connection
    connection.end();
  });
});
