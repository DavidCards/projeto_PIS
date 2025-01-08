-- Inserção de dados de exemplo na tabela `utilizadores`
INSERT INTO utilizadores (username, password, email) VALUES ('joao', 'senha123', 'joao@example.com');
INSERT INTO utilizadores (username, password, email) VALUES ('maria', 'senha456', 'maria@example.com');
INSERT INTO utilizadores (username, password, email) VALUES ('ana', 'senha789', 'ana@example.com'); 

INSERT INTO categorias (nome) VALUES
('Sobremesas'),
('Massas'),
('Carnes');

INSERT INTO receitas (nome, autor, ingredientes, descricao, dificuldade, categoria_id, tempo, custo, imagem) VALUES
('Bolo de Chocolate', 'João Silva', 'Farinha, Açúcar, Chocolate', 'Misture tudo e asse.', 'Fácil', 1, 60, 10.5, 'bolo.jpg'),
('Macarrão à Bolonhesa', 'Maria Oliveira', 'Macarrão, Carne Moída, Molho de Tomate', 'Prepare o molho e cozinhe o macarrão.', 'Médio', 2, 30, 15.0, 'macarrao.jpg');
