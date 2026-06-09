const app = require("./app");

const port = process.env.PORT || 3000;

const servidor = "teste";

app.listen(port, () => {
  console.log(`CampusOps API rodando na porta ${port}`);
});