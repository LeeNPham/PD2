const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'yourdatabase'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to SQL database');
});

app.get('/todos', (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/todos', (req, res) => {
    const { title, completed } = req.body;
    const query = 'INSERT INTO todos (title, completed) VALUES (?, ?)';
    db.query(query, [title, completed], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, title, completed });
    });
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const query = 'UPDATE todos SET title = ?, completed = ? WHERE id = ?';
    db.query(query, [title, completed, id], (err, result) => {
        if (err) throw err;
        res.json({ id, title, completed });
    });
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM todos WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) throw err;
        res.json({ id });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
