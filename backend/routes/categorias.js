const express = require('express');
const db = require('../models/baseDados');
const router = express.Router();

// Listar todas as categorias
router.get('/', (req, res) => {
  const query = 'SELECT * FROM categorias';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar categorias:', err);
      res.status(500).send('Erro no servidor.');
      return;
    }
    res.json(results);
  });
});

// Criar uma nova categoria
router.post('/', (req, res) => {
  const { nome } = req.body;
  const query = 'INSERT INTO categorias (nome) VALUES (?)';

  db.query(query, [nome], (err) => {
    if (err) {
      console.error('Erro ao adicionar categoria:', err);
      res.status(500).send('Erro no servidor.');
      return;
    }
    res.status(201).send('Categoria criada com sucesso!');
  });
});

module.exports = router;
