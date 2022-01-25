const pug = require("pug");
const fs = require("fs");
const PdfService = require("./pdf-service");
const httpService = require("./http-service");
const moment = require("moment");
const base64Img = require("base64-img");
const { httpConstants } = require("./common/constants");

// const dataJson = require("./data.json");

//variables
let content;

content = pug.renderFile("sample.pug", {
  // title: invoiceJson.invoiceNumber,
  // GSTIN: invoiceJson.customerGSTIN,
  // organizationNo: invoiceJson.organizationNo || " ",
  // invoiceNumber: invoiceJson.invoiceNumber,
  // invoiceDate: moment(invoiceJson.invoiceDate).format("DD/MM/YYYY"),
  // dueDate: moment(invoiceJson.dueDate).format("DD/MM/YYYY"),
  // lineItems: invoiceJson.lineItems,
  // taxableAmount: invoiceJson.taxableAmount,
  // invoiceQr: invoiceJson.invoiceQr,
  // orgJson: orgJsonData,
  // invoiceJsonData: invoiceJson,
  // uniqueTaxes: Object.entries(invoiceJson.uniqueTaxes),
  // debitNoteUniqueTaxes: Object.entries(debitNoteJson.uniqueTaxes),
  // creditNoteUniqueTaxes: Object.entries(creditNoteJson.uniqueTaxes),
  // pharmaInvoice: pharmaInvoiceJson,
  // lineItemsPharma: pharmaInvoiceJson.lineItems,
  // time: moment().format("HH:MM"),
  // hsnData: hsnData,
  // debitNoteJson: debitNoteJson,
  // debitNoteLineItems: debitNoteJson.lineItems,
  // creditNoteJson: creditNoteJson,
  // salesOrderJson: salesOrderJson,
});

fs.writeFile("sample_html.html", content, function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log("Pdf Created");
});
