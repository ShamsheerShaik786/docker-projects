const { Pool } = require('pg');

const pool = new Pool({
  host: 'db',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'mydatabase',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
