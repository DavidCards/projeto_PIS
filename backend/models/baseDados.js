//módulo pg (node-postgres) no Node.js
const { Pool } = require('pg');
const pool = new Pool({
  user: 'usuario',
  host: 'localhost',
  database: 'projeto_pis',
  password: 'senha',
  port: 5432,
});

module.exports = pool;
