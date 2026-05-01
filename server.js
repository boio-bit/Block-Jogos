const express = require("express");
const path = require("path");

const app = express();

// 🔥 Permitir JSON (caso use APIs depois)
app.use(express.json());

// 🔥 Servir arquivos do frontend (client)
app.use(express.static(path.join(__dirname, "client")));

// 🔥 Página principal (login)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// 🔥 Fallback total (evita erro de rota no Render / refresh)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// 🔥 Porta do Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Block Jogos rodando na porta " + PORT);
});
