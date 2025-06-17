const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gerenciamento_tarefas",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados MySQL:", err.message);
    return;
  }
  console.log("Conectado ao banco de dados MySQL.");

  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    )
  `;
  db.query(createUsersTable, (err) => {
    if (err) {
      console.error("Erro ao criar tabela usuarios:", err.message);
    } else {
      console.log("Tabela usuarios verificada/criada.");
      db.query("SELECT COUNT(*) AS count FROM usuarios", (err, results) => {
        if (err) {
          console.error("Erro ao contar usuários:", err.message);
          return;
        }
        if (results[0].count === 0) {
          const insertUsers = `
            INSERT INTO usuarios (nome, email) VALUES
            (\'João Silva\', \'joao.silva@empresa.com\'),
            (\'Maria Santos\', \'maria.santos@empresa.com\'),
            (\'Carlos Pereira\', \'carlos.pereira@empresa.com\')
          `;
          db.query(insertUsers, (err) => {
            if (err) {
              console.error("Erro ao inserir usuários de exemplo:", err.message);
            } else {
              console.log("Inseridos 3 usuários de exemplo.");
            }
          });
        }
      });
    }
  });

  const createTasksTable = `
    CREATE TABLE IF NOT EXISTS tarefas (
      id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
      id_usuario INT NOT NULL,
      descricao_tarefa TEXT NOT NULL,
      nome_setor VARCHAR(255) NOT NULL,
      prioridade VARCHAR(50) NOT NULL,
      data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(50) NOT NULL,
      FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
    )
  `;
  db.query(createTasksTable, (err) => {
    if (err) {
      console.error("Erro ao criar tabela tarefas:", err.message);
    } else {
      console.log("Tabela tarefas verificada/criada.");
      db.query("SELECT COUNT(*) AS count FROM tarefas", (err, results) => {
        if (err) {
          console.error("Erro ao contar tarefas:", err.message);
          return;
        }
        if (results[0].count === 0) {
          const insertTasks = `
            INSERT INTO tarefas (id_usuario, descricao_tarefa, nome_setor, prioridade, status) VALUES
            (1, \'Implementar sistema de login\', \'TI\', \'alta\', \'a fazer\'),
            (2, \'Revisar documentação do projeto\', \'Qualidade\', \'média\', \'fazendo\'),
            (1, \'Configurar servidor de produção\', \'TI\', \'alta\', \'a fazer\'),
            (3, \'Preparar relatório mensal\', \'Administrativo\', \'baixa\', \'pronto\')
          `;
          db.query(insertTasks, (err) => {
            if (err) {
              console.error("Erro ao inserir tarefas de exemplo:", err.message);
            } else {
              console.log("Inseridas 4 tarefas de exemplo.");
            }
          });
        }
      });
    }
  });
});

module.exports = db;


