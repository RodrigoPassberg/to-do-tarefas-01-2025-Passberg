const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/tarefas", (req, res) => {
  const sql = `
    SELECT t.*, u.nome as nome_usuario
    FROM tarefas t
    JOIN usuarios u ON t.id_usuario = u.id
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao buscar tarefas:", err.message);
      res.status(500).json({ error: "Erro ao buscar tarefas" });
      return;
    }
    res.json(results);
  });
});

router.post("/tarefas", (req, res) => {
  const { id_usuario, descricao_tarefa, nome_setor, prioridade, status } = req.body;
  if (!id_usuario || !descricao_tarefa || !nome_setor || !prioridade || !status) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }
  const sql = "INSERT INTO tarefas (id_usuario, descricao_tarefa, nome_setor, prioridade, status) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [id_usuario, descricao_tarefa, nome_setor, prioridade, status], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar tarefa:", err.message);
      res.status(500).json({ error: "Erro ao cadastrar tarefa" });
      return;
    }
    res.status(201).json({ message: "Tarefa cadastrada com sucesso!", id: result.insertId });
  });
});

router.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { id_usuario, descricao_tarefa, nome_setor, prioridade, status } = req.body;
  if (!id_usuario || !descricao_tarefa || !nome_setor || !prioridade || !status) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }
  const sql = "UPDATE tarefas SET id_usuario = ?, descricao_tarefa = ?, nome_setor = ?, prioridade = ?, status = ? WHERE id_tarefa = ?";
  db.query(sql, [id_usuario, descricao_tarefa, nome_setor, prioridade, status, id], (err, result) => {
    if (err) {
      console.error("Erro ao atualizar tarefa:", err.message);
      res.status(500).json({ error: "Erro ao atualizar tarefa" });
      return;
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }
    res.json({ message: "Tarefa atualizada com sucesso!" });
  });
});

router.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM tarefas WHERE id_tarefa = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erro ao excluir tarefa:", err.message);
      res.status(500).json({ error: "Erro ao excluir tarefa" });
      return;
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }
    res.json({ message: "Tarefa excluída com sucesso!" });
  });
});

module.exports = router;


