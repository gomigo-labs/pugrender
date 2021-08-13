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
let invoiceFormat = 3
let lastPageLimit = 8
let middlePageLimit = 15

let invoiceTemplate = invoiceSetting[`${invoiceFormat}`]
let page = invoicePageFormat[`${invoiceFormat}`]

if (page.lineItemLimit < invoiceJson.lineItems.length){
  let page = 1
  let lineItemChunks = _.chunk(invoiceJson.lineItems,page.lineItemLimit)
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
    console.log("first Page created");
  });

  PdfService.createPdf("A4","first-page.pdf");
  let lastChunk
  while (!last){
    let middle
    let remainingItems = _.flatten(lineItemChunks.slice(1,lineItemChunks.length))
    page = invoicePageFormat[`3middle`]
    if (remainingItems.length > middlePageLimit){
      let middlePageChunks = _.chunk(remainingItems,page.lineItemLimit)
      if (middlePageChunks.length > 1){
        middle = true
        lastChunk = middlePageChunks[middlePageChunks.length]
        middlePageChunks = middlePageChunks.slice(0,middlePageChunks.length-1)
      }else if(middlePageChunks[0] > lastPageLimit){
        middle = true
      }
      else{
        middle = false
        lastChunk = middlePageChunks[0]
      }
      while (middle){
        for (let middlePageLineItems of middlePageChunks){
          invoiceJson.lineItems = middlePageLineItems
          content = pug.renderFile("gst-middle.pug", {
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
          page += 1
          fs.writeFile(`${"gst_middle"+ page.toString()+".html"}`, content, function (err, data) {
            if (err) {
              return console.log(err);
            }
            console.log("middle page created");
          });
          PdfService.createPdf("A4",`${"gst_middle"+ page.toString()+".pdf"}`);
        }
        middle = false
      }
    }else{
      invoiceJson.lineItems = lastChunk
      content = pug.renderFile("gst-middle.pug", {
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
      page += 1
      fs.writeFile(`${"gst_middle"+ page.toString()+".html"}`, content, function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log("middle page created");
      });
      PdfService.createPdf("A4",`${"gst_middle"+ page.toString()+".pdf"}`);

      last = true

    }
  }


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
