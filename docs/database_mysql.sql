CREATE DATABASE IF NOT EXISTS gerenciamento_tarefas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE gerenciamento_tarefas;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tarefas (
    id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    descricao_tarefa TEXT NOT NULL,
    nome_setor VARCHAR(255) NOT NULL,
    prioridade ENUM(\'baixa\', \'média\', \'alta\') NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM(\'a fazer\', \'fazendo\', \'pronto\') DEFAULT \'a fazer\',
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO usuarios (nome, email) VALUES 
(\'João Silva\', \'joao.silva@empresa.com\'),
(\'Maria Santos\', \'maria.santos@empresa.com\'),
(\'Carlos Pereira\', \'carlos.pereira@empresa.com\');

INSERT INTO tarefas (id_usuario, descricao_tarefa, nome_setor, prioridade, status) VALUES 
(1, \'Implementar sistema de login\', \'TI\', \'alta\', \'a fazer\'),
(2, \'Revisar documentação do projeto\', \'Qualidade\', \'média\', \'fazendo\'),
(1, \'Configurar servidor de produção\', \'TI\', \'alta\', \'a fazer\'),
(3, \'Preparar relatório mensal\', \'Administrativo\', \'baixa\', \'pronto\');


