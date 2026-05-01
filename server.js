const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 serve tudo do client automaticamente
app.use(express.static(path.join(__dirname, "client")));

// 🔥 sempre abre login
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// 🔥 fallback (IMPORTANTE pro render)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Block Jogos rodando");
});
