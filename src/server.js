const express = require("express");
const bodyParse = require("body-parser");
const morganBody = require("morgan-body");
const fs = require("fs");
const path = require("path");
const moment = require("moment");

const app = express();
const port = 3000;

app.use(bodyParse.json());

const log = fs.createWriteStream(
  path.join(__dirname, "./logs", `server${moment().format("YYYY-MM-DD")}.logs`),
  { flags: "a" }
);

morganBody(app, {
  noColors: true,
  stream: log,
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/teste", (req, res) => {
  res.send("teste");
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
