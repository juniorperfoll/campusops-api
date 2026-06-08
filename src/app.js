const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    mensagem: "CampusOps API em execução",
    disciplina: "Cloud Computing",
    tema: "DevOps",
    status: "ok"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.get("/devops", (req, res) => {
  res.json({
    conceito: "DevOps combina cultura, práticas e ferramentas.",
    beneficios: ["Velocidade", "Entrega rápida", "Confiabilidade", "Escala", "Colaboração", "Segurança"]
  });
});

module.exports = app;