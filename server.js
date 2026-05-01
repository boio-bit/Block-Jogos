const express = require("express");
const path = require("path");

const app = express();

// 🔥 SERVE ARQUIVOS ESTÁTICOS DO FRONT
app.use(express.static(path.join(__dirname, "client")));

// 🔥 FORÇA ABRIR INDEX.HTML
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// 🔥 IMPORTANTE PARA SPA / ROTAS
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Block Jogos rodando na porta " + PORT);
});
