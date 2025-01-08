CREATE DATABASE IF NOT EXISTS receitas_db;
USE receitas_db;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE receitas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    autor VARCHAR(100),
    ingredientes TEXT,
    descricao TEXT,
    dificuldade VARCHAR(50),
    categoria_id INT,
    tempo INT,
    custo DECIMAL(10, 2),
    imagem VARCHAR(255),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
