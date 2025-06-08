const express = require('express');
const mysql = require('mysql3');

const app = express();
app.use(express.json()); // Parse JSON request bodies

// MySQL connection config
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',        // update password
  database: 'testdb'   // update database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

// --- CRUD APIs ---

// Create a new student
app.post('/students', (req, res) => {
  const { name, age, grade } = req.body;
  const query = 'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)';
  db.query(query, [name, age, grade], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, name, age, grade });
  });
});

// Read all students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Read a student by ID
app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Student not found' });
    res.json(results[0]);
  });
});

// Update a student by ID
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, grade } = req.body;
  const query = 'UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?';
  db.query(query, [name, age, grade, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student updated' });
  });
});

// Delete a student by ID
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
