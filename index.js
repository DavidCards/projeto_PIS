// Importação dos módulos necessários
const express = require('express');
const fs = require('fs');
const path = require('path');

// Inicializar a aplicação Express
const app = express();
app.use(express.json()); // Middleware para fazer o parse do corpo JSON

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// Rota para servir o index.html na raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Inicializar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});

/**const express = require('express');
const path = require('path');
const app = express();
const db = require('./models/database');
const { populateCategorias, populateIngredientes } = require('./controllers/categoriesController');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.listen(3000, async () => {
  console.log('Servidor rodando na porta 3000');
  await populateCategorias();
  await populateIngredientes();
}); */
