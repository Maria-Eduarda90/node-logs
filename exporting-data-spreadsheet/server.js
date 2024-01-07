const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Nome da planilha");

const data = [
  {
    name: "teste",
    email: "teste@gmail.com",
    phone: "69 993546776",
  },
  {
    name: "maria",
    email: "maria.teste@gmail.com",
    phone: "69 993546776",
  },
];

const titles = ["name", "E-mails", "Celular"];

let headingColumnIndex = 1;
titles.forEach((title) => {
  ws.cell(1, headingColumnIndex++).string(title);
});

let rowIndex = 2;
data.forEach((record) => {
  let columnIndex = 1;
  Object.keys(record).forEach((columnName) => {
    ws.cell(rowIndex, columnIndex++).string(record[columnName]);
  });
  rowIndex++;
});

wb.write("arquivo.xlsx");
