const pug = require("pug");
const fs = require("fs");
const PdfService = require("./services/pdf-service");
const httpService = require("./services/http-service");
const moment = require("moment");
const base64Img = require("base64-img");
const { httpConstants } = require("./common/constants");

const dataJson = require("./data/data.json");

//variables
let content;

content = pug.renderFile("./templates/sample.pug", {
  data: dataJson,
  // invoiceDate: moment(invoiceJson.invoiceDate).format("DD/MM/YYYY"),
  // dueDate: moment(invoiceJson.dueDate).format("DD/MM/YYYY"),
  // uniqueTaxes: Object.entries(invoiceJson.uniqueTaxes),
  // debitNoteUniqueTaxes: Object.entries(debitNoteJson.uniqueTaxes),
  // creditNoteUniqueTaxes: Object.entries(creditNoteJson.uniqueTaxes),
});

fs.writeFile("sample_html.html", content, function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log("Pdf Created");
});
