const express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post(
  "/users",
  [
    body("email").isEmail().withMessage("Precisa ser um email válido"),
    body("email").custom((value) => {
      if (!value) {
        return Promise.reject("Email é obrigatorio");
      }
      if (value === "teste@gmail.com") {
        return Promise.reject("Email já cadastrado");
      }

      return true;
    }),
    body("password")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter 5 caractere ou mais"),
    body("age").isNumeric().withMessage("Idade precisa ser um numero"),
  ],
  (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros });
    }

    res.status(200).json({ message: "success" });
  }
);

app.listen(3000, () => {
  console.log(`Rodando na porta 3000`);
});
