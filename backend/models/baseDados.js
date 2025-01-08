const mysql = require('mysql2');

// Configuração da conexão
const db = mysql.createConnection({
  host: 'localhost',  // Servidor MySQL
  user: 'root',       // Usuário
  password: '',       // Senha (deixe vazio se não houver)
  database: 'receitas_db', // Nome do banco de dados
});

// Conectar ao banco
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1); // Finalizar se houver erro
  }
  console.log('Conectado ao banco de dados com sucesso!');
});

module.exports = db;
