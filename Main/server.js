const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the employee_db database.');
});

app.post('/api/new-employee', (req, res) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`;
  const params = [req.body.first_name, req.body.last_name, req.body.role_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: req.body
    });
  });
});

app.get('/api/employees', (req, res) => {
  const sql = `SELECT e.id, e.first_name, e.last_name, r.title AS role, d.department_name
               FROM employee e
               LEFT JOIN role r ON e.role_id = r.id
               LEFT JOIN department d ON r.department_id = d.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.delete('/api/employee/:id', (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (result.affectedRows === 0) {
      res.json({
        message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'success',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
