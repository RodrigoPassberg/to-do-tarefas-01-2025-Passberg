
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

CREATE TABLE tarefas (
    id_tarefa INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER NOT NULL,
    descricao_tarefa TEXT NOT NULL,
    nome_setor TEXT NOT NULL,
    prioridade TEXT NOT NULL CHECK(prioridade IN ('baixa', 'média', 'alta')),
    data_cadastro TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('a fazer', 'fazendo', 'pronto')) DEFAULT 'a fazer',
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios (nome, email) VALUES 
('João Silva', 'joao.silva@empresa.com'),
('Maria Santos', 'maria.santos@empresa.com'),
('Pedro Oliveira', 'pedro.oliveira@empresa.com');

INSERT INTO tarefas (id_usuario, descricao_tarefa, nome_setor, prioridade, data_cadastro, status) VALUES 
(1, 'Descrição da tarefa de Alta Prioridade', 'Setor Y', 'alta', '2025-06-17T10:00:00', 'a fazer'),
(2, 'Descrição da tarefa de Baixa Prioridade', 'Setor F', 'baixa', '2025-06-17T11:00:00', 'fazendo'),
(3, 'Descrição da tarefa concluída', 'Setor H', 'média', '2025-06-17T09:00:00', 'pronto'),
(1, 'Descrição da tarefa 1', 'Setor J', 'média', '2025-06-17T12:00:00', 'a fazer');

