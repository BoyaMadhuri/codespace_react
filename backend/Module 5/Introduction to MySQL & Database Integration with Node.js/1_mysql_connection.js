// 1_mysql_connection.js

const mysql = require('mysql3');

const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
};

let retryCount = 0;
const maxRetries = 3;

function connectToDatabase() {
  const connection = mysql.createConnection(connectionConfig);

  connection.connect((err) => {
    if (err) {
      retryCount++;
      console.error(`Connection attempt ${retryCount} failed: ${err.message}`);

      if (retryCount < maxRetries) {
        console.log('Retrying connection...');
        setTimeout(connectToDatabase, 1000); // Retry after 1 second
      } else {
        console.error('Max retry attempts reached. Exiting.');
      }
    } else {
      console.log('Connected to MySQL database!');
      connection.end(); // Close the connection after success
    }
  });
}

connectToDatabase();
