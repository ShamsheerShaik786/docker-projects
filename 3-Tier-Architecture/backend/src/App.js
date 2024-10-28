const express = require('express');
const db = require('./db');

const app = express();
const PORT = 5000;

app.get('/api/message', async (req, res) => {
  try {
    const result = await db.query('SELECT message FROM messages LIMIT 1');
    res.json({ message: result.rows[0].message });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
