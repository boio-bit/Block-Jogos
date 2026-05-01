const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 SERVE FRONTEND
app.use(express.static(path.join(__dirname, "client")));

// 🔥 HOME
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// 🔥 FALLBACK CORRETO (SEM '*')
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Block Jogos rodando 🚀");
});
