const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./models/baseDados'); // Configuração do pool do PostgreSQL

const app = express();
app.use(bodyParser.json()); // Para processar JSON no corpo das requisições

// Endpoint para autenticação
app.post('/login', async (req, res) => {
    const { username, password } = req.body; // Extrair dados do corpo da requisição

    try {
        // Consulta à base de dados
        const result = await pool.query(
            'SELECT * FROM utilizadores WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            // Credenciais válidas
            res.json({ success: true, message: 'Login bem-sucedido!' });
        } else {
            // Credenciais inválidas
            res.status(401).json({ success: false, message: 'Credenciais inválidas.' });
        }
    } catch (err) {
        console.error('Erro no servidor:', err);
        res.status(500).json({ success: false, message: 'Erro no servidor.' });
    }
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
//Backend
//A rota /login recebe os dados (username e password) enviados pelo cliente.
//Valida os dados consultando a tabela utilizadores na base de dados.
//Retorna uma resposta JSON ao cliente com o resultado da validação.

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Login bem-sucedido
            window.location.href = 'index.html'; // Redirecionar para a página inicial
        } else {
            // Mostrar mensagem de erro
            document.getElementById('error-message').textContent = data.message;
        }
    } catch (err) {
        console.error('Erro na ligação ao servidor:', err);
        document.getElementById('error-message').textContent = 'Erro no servidor.';
    }
}

//Frontend
//Envia uma requisição POST para o endpoint /login no servidor.
//Passa os dados do utilizador no corpo da requisição (como JSON).
//Verifica a resposta do servidor para determinar se o login foi bem-sucedido ou não.