const express = require("express");
const moment = require("moment");

const app = express();

app.listen(3000, () => {
  const data = moment().format("DD/MM/YYYY hh:mm:ss");
  console.log(data);

  console.log("rodando na porta 3000");
});
