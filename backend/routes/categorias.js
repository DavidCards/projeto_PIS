//Este código implementa uma rota de API em Node.js usando o Express,
// que interage com uma base de dados através de um objeto pool do PostgreSQL.
const express = require('express');
const router = express.Router();
const pool = require('../models/baseDados');

router.get('/categorias', async (req, res) => {  //Define uma rota HTTP do tipo GET para o endpoint /categorias.
  try {
    const result = await pool.query('SELECT * FROM categorias');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
