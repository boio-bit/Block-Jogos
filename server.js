const express = require("express");
const path = require("path");

const app = express();

// 🔥 permite JSON (caso use depois)
app.use(express.json());

// 🔥 SERVIR ARQUIVOS DO FRONTEND (PASTA client)
app.use(express.static(path.join(__dirname, "client")));

// 🔥 ROTA PRINCIPAL = ABRIR SITE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// 🔥 REMOVER QUALQUER "API TEXT" — NÃO USAR res.send FIXO

// 🔥 PORTA DO RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Block Jogos rodando na porta " + PORT);
});
