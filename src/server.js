const app = require("./app");

const servidor = "";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`CampusOps API rodando na porta ${port}`);
});