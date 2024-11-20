DROP DATABASE IF EXISTS `ReceitasBD`;
CREATE DATABASE `ReceitasBD`;

USE `ReceitasBD`;

-- Criação da tabela `utilizadores`
CREATE TABLE IF NOT EXISTS utilizadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela `categorias`
CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- Criação da tabela `ingredientes`
CREATE TABLE IF NOT EXISTS ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- Criação da tabela `receitas`
CREATE TABLE IF NOT EXISTS receitas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    preparacao TEXT NOT NULL,
    dificuldade VARCHAR(50), 
    categoria_id INT,
    tempo VARCHAR(50),
    custo VARCHAR(50),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Criação da tabela `receita_ingredientes`
CREATE TABLE IF NOT EXISTS receita_ingredientes (
    receita_id INT,
    ingrediente_id INT,
    quantidade VARCHAR(100),
    PRIMARY KEY (receita_id, ingrediente_id),
    FOREIGN KEY (receita_id) REFERENCES receitas(id),
    FOREIGN KEY (ingrediente_id) REFERENCES ingredientes(id)
);