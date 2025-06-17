const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/usuarios");
const taskRoutes = require("./routes/tarefas");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API do Sistema de Gerenciamento de Tarefas", status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


 