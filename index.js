const mysql = require('mysql2');
const express = require('express');
const app = express();

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha', // Substitua 'sua_senha' pela senha correta
  database: 'nome_do_banco' // Substitua 'nome_do_banco' pelo nome do seu banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

// Configuração do servidor Express
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});