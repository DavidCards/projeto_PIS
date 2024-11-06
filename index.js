// Importação dos módulos necessários
const express = require('express');
const fs = require('fs');
const path = require('path');

// Inicializar a aplicação Express
const app = express();
app.use(express.json()); // Middleware para fazer o parse do corpo JSON

// Inicializar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});