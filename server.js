const pug = require("pug");
const fs = require("fs");
const PdfService = require("./pdf-service");
const httpService = require("./http-service");
const moment = require("moment");
const base64Img = require("base64-img");
const { httpConstants,invoiceSetting,invoicePageFormat } = require("./common/constants");
const orgJsonData = require("./org.json");
let invoiceJson = require("./invoice.json");
let pharmaInvoiceJson = require("./pharmaJson.json");
const _ = require("lodash")
let content;

// TODO  SET THE FORMAT HERE 0-stylish 1-pharmacy 2-GST 3-Works
let invoiceFormat = 2

let invoiceTemplate = invoiceSetting[`${invoiceFormat}`]
let page = invoicePageFormat[`${invoiceFormat}`]

if (page.lineItemLimit < invoiceJson.lineItems.length){
  let lineItemChunks = _.chunk(invoiceJson.lineItems,page.lineItemLimit)
  //First page render with first 6 elements
  let firstPageLineItems = lineItemChunks[0]
  invoiceJson.lineItems = firstPageLineItems
  let last = false
  content = pug.renderFile(invoiceTemplate, {
    title: invoiceJson.invoiceNumber,
    GSTIN: invoiceJson.customerGSTIN,
    organizationNo: invoiceJson.organizationNo || " ",
    invoiceNumber: invoiceJson.invoiceNumber,
    invoiceDate: moment(invoiceJson.invoiceDate).format("DD/MM/YYYY"),
    dueDate: moment(invoiceJson.dueDate).format("DD/MM/YYYY"),
    lineItems: invoiceJson.lineItems,
    taxableAmount: invoiceJson.taxableAmount,
    invoiceQr: invoiceJson.invoiceQr,
    orgJson: orgJsonData,
    invoiceJsonData: invoiceJson,
    uniqueTaxes: Object.entries(invoiceJson.uniqueTaxes),
    pharmaInvoice: pharmaInvoiceJson,
    lineItemsPharma: pharmaInvoiceJson.lineItems,
    time: moment().format("HH:MM"),
  });

  fs.writeFile("gst_html.html", content, function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("hello");
  });

  PdfService.createPdf("A4","first-page.pdf");

  while (!last){
    let remainingItems = _.flatten(lineItemChunks.slice(1,lineItemChunks.length))
    page = invoicePageFormat[`3middle`]
    if (remainingItems.length > page.lineItemLimit){
      console.log("middle")
    }else{
      last = true
    }
  }

    //create pdfs for all splits
    //merge pdfs using pdftk

}

// content = pug.renderFile(invoiceTemplate, {
//   title: invoiceJson.invoiceNumber,
//   GSTIN: invoiceJson.customerGSTIN,
//   organizationNo: invoiceJson.organizationNo || " ",
//   invoiceNumber: invoiceJson.invoiceNumber,
//   invoiceDate: moment(invoiceJson.invoiceDate).format("DD/MM/YYYY"),
//   dueDate: moment(invoiceJson.dueDate).format("DD/MM/YYYY"),
//   lineItems: invoiceJson.lineItems,
//   taxableAmount: invoiceJson.taxableAmount,
//   invoiceQr: invoiceJson.invoiceQr,
//   orgJson: orgJsonData,
//   invoiceJsonData: invoiceJson,
//   uniqueTaxes: Object.entries(invoiceJson.uniqueTaxes),
//   pharmaInvoice: pharmaInvoiceJson,
//   lineItemsPharma: pharmaInvoiceJson.lineItems,
//   time: moment().format("HH:MM"),
// });
//
// fs.writeFile("gst_html.html", content, function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("hello");
// });
//
// PdfService.createPdf("A4");
