// Importação dos módulos necessários
const express = require('express');
const fs = require('fs');
const path = require('path');

// Inicializar a aplicação Express
const app = express();
app.use(express.json()); // Middleware para fazer o parse do corpo JSON

// Caminho do arquivo onde os dados dos usuários serão armazenados
const filePath = path.join(__dirname, 'usuarios.json');

// Verifica se o arquivo JSON já existe, caso contrário, cria um arquivo inicial vazio
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

// Função auxiliar para ler os usuários do arquivo
function lerUsuarios() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Função auxiliar para salvar os usuários no arquivo
function salvarUsuarios(usuarios) {
  fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
}

// Endpoint para adicionar um usuário (Create)
app.post('/usuarios', (req, res) => {
  const usuarios = lerUsuarios();
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
    email: req.body.email,
  };
  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);
  res.status(201).json(novoUsuario);
});

// Endpoint para obter todos os usuários (Read)
app.get('/usuarios', (req, res) => {
  const usuarios = lerUsuarios();
  res.json(usuarios);
});

// Endpoint para obter um usuário específico por ID (Read)
app.get('/usuarios/:id', (req, res) => {
  const usuarios = lerUsuarios();
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

// Endpoint para atualizar um usuário por ID (Update)
app.put('/usuarios/:id', (req, res) => {
  const usuarios = lerUsuarios();
  const usuarioIndex = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  if (usuarioIndex !== -1) {
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...req.body };
    salvarUsuarios(usuarios);
    res.json(usuarios[usuarioIndex]);
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

// Endpoint para deletar um usuário por ID (Delete)
app.delete('/usuarios/:id', (req, res) => {
  const usuarios = lerUsuarios();
  const usuarioIndex = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  if (usuarioIndex !== -1) {
    const usuarioRemovido = usuarios.splice(usuarioIndex, 1);
    salvarUsuarios(usuarios);
    res.json(usuarioRemovido);
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

// Inicializar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});