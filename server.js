const pug = require('pug')
fs = require('fs');


//variables
let content,docName,dochtml,docUrl,apphtml,appLink,organization;

let invoiceJson={
    addedOn: 1626171809083,
    additionalCharges: [
        {
            chargeAmount: "10056",
            chargeDescription: "freight charge"
        }
    ],
    amount: 1000,
    amountPaid: 0,
    contactPerson: {
        contactName: "customer contact person",
        contactPersonEmail: " ",
        contactPersonId: " ",
        contactPersonNumber: "5666004156"
    },
    currency: "INR",
    customerAddress: { },
    customerEmail: " ",
    customerGSTIN: "27AAFCM0612E1ZZ",
    customerId: "e3721959",
    customerName: "test customer",
    customerNotes: "test",
    customerNumber: "456456465",
    customerUpiId: "test@icici",
    discount: {
        discountAmount: "100",
        discountDescription: "10%"
    },
    documents: [ ],
    dueDate: 1624655669000,
    invoiceBankDetails: {
        accountName: "String",
        accountNumber: "String",
        bankName: "String",
        ifscCode: "String"
    },
    invoiceDate: 1623655669000,
    invoiceId: "1c3cf5d9034960d1",
    invoiceLogo: { },
    invoiceNumber: "GOM1236",
    invoiceObject: { },
    invoiceSignature: { },
    invoiceStatus: "Unpaid",
    invoiceSubject: "invoice for paper products",
    isDraft: 0,
    isSent: 0,
    lineItems: [
        {
            batch: "b100",
            discount: 0,
            itemAmount: "118",
            itemCode: "15c150",
            itemDescription: "paper 200gsm",
            itemHsnOrSac: "00564",
            itemId: "15c150",
            itemName: "paper",
            itemPrice: "20",
            itemQty: 5,
            itemTax: 18,
            lineNumber: "1",
            taxableAmount: 100,
            uom: "EA"
        },
        {
            discount: 0,
            itemAmount: "100",
            itemCode: "8df675",
            itemDescription: "paper 200gsm",
            itemHsnOrSac: "00564",
            itemId: "8df675",
            itemName: "paper",
            itemPrice: "20",
            itemQty: 5,
            itemTax: 18,
            lineNumber: "2",
            serialNos: [
                "s01",
                "s02"
            ],
            taxableAmount: 100,
            uom: "EA"
        }
    ],
    modifiedOn: 1626171809083,
    orderNo: "30056846",
    organizationGSTIN: "27AAACL1069K1ZC",
    paymentTerms: "NET 30",
    PK: "1c3cf5d9034960d1",
    SK: " ",
    taxableAmount: 900,
    tenantId: "skull-dev",
    termsAndConditions: "big ass terms and termsAndConditions"
}


content = pug.renderFile("template.pug", {
    docUrl:docUrl,
    dochtml:dochtml,
    docName:docName,
    apphtml:apphtml,
    appLink: appLink,
    title: invoiceJson.invoiceNumber,
    description: "test",
    footer: "test",
    GSTIN:invoiceJson.customerGSTIN
});

fs.writeFile('template_html.html', content, function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});