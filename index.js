const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const receitasRoutes = require('./routes/receitas');
const categoriasRoutes = require('./routes/categorias');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/receitas', receitasRoutes);
app.use('/api/categorias', categoriasRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de Gestão de Receitas!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
//Este arquivo será responsável por inicializar o servidor, carregar middlewares e configurar as rotas principais. O código centralizado no server.js será dividido para manter o index.js limpo.