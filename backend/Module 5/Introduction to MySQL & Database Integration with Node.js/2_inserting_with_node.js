// Inserting Data into MySQL from Node.js Application
// Description: Write a Node.js script to insert a new student record into the students table.// 2_inserting_with_node.js

const mysql = require('mysql3');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',      // update your password here
  database: 'testdb' // update with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err.message);
    return;
  }
  console.log('Connected to MySQL!');
  
  // Define the student data to insert
  const student = { name: 'John Doe', age: 21, grade: 'A' };
  
  // Insert query
  const query = 'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)';
  
  connection.query(query, [student.name, student.age, student.grade], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.message);
    } else {
      console.log('Student inserted with ID:', results.insertId);
    }
    
    // Close the connection
    connection.end();
  });
});
