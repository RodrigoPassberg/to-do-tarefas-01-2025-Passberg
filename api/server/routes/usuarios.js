const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      console.error("Erro ao buscar usuários:", err.message);
      res.status(500).json({ error: "Erro ao buscar usuários" });
      return;
    }
    res.json(results);
  });
});

router.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios." });
  }
  const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
  db.query(sql, [nome, email], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar usuário:", err.message);
      res.status(500).json({ error: "Erro ao cadastrar usuário" });
      return;
    }
    res.status(201).json({ message: "Usuário cadastrado com sucesso!", id: result.insertId });
  });
});

module.exports = router;


