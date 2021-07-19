const pug = require("pug");
const fs = require("fs");
const PdfService = require("./pdf-service");
const moment = require("moment");
// const orgJson = require('org.json')

const orgJsonData = {
  brandName: "Skull Paper Inc",
  businessCategory: "service",
  businessName: "Skull Medico",
  businessProfile: true,
  businessType: "pvt",
  businessVerification: true,
  communicationAddress: {
    address_line_1: "Moon Apartments",
    address_line_2: "Mars Complex",
    address_line_3: "Jupiter lane",
    address_line_4: "",
    city: "Delhi",
    country: "India",
    state: "Delhi",
    zip: "110051",
  },
  companyPan: "AAKCR1346R",
  decentroTxnId: "1725F2543E7749CA87AAAAEAAFCFFF04",
  documents: ["test"],
  email: "jayesh@gomigo.io",
  GSTIN: "07AAKCR1346R1ZR",
  individualPan: "TEST",
  kycData: {
    additionalPlacesOfBusinessInState: [],
    centralJurisdiction: "RANGE - 82",
    centralJurisdictionCode: "ZJ0802",
    constitutionOfBusiness: "Private Limited Company",
    currentStatusOfRegistration: "Active",
    cxdt: "",
    gstin: "07AAKCR1346R1ZR",
    legalName: "RIVERSYS TECHNOLOGIES PRIVATE LIMITED",
    natureOfBusiness: ["Supplier of Services"],
    pan: "AAKCR1346R",
    primaryBusinessContact: {
      address:
        "NEW PRIYADARSHINI APARTMENTS, FLAT NO. 108, 3RD FLOOR, PLOT NO.19, SECTOR-5, , DWARKA, , North West Delhi, Delhi, 110075",
      natureOfBusinessAtAddress: "Supplier of Services",
    },
    registrationDate: "02/06/2020",
    stateJurisdiction: "Ward 61",
    stateJurisdictionCode: "DL061",
    taxpayerType: "Regular",
    tradeName: "RIVERSYS TECHNOLOGIES PRIVATE LIMITED",
  },
  mobileNo: "98989898989",
  modifiedOn: 1623677338619,
  organizationAccount: {
    accountName: "Riversys Technologies Ltd",
    accountNumber: "462515003100000001",
    customerId: "MASTER001",
    email: "aayush@gomigo.io",
    ifscCode: "ICIC0000106",
    mobileNo: "9769468163",
    upiId: "decfin.riversys@icici",
    bankName: "HDFC BANK, AKOLA HDFC BANK, AKOLA",
    upiQrCode:
      "iVBORw0KGgoAAAANSUhEUgAAAPUAAAD1AQAAAACgyo7IAAAChklEQVR4nO2YPY6DMBCFJ6Kg5Ai+SXIxJCNxseQmPgIlBcrse88EsrvSditPEQoL+FyMPT9vbPM/n9U+/MP/ly9mdlmy241/7jYmfI74aTkGz+4PcQw93sp6W8YkEIKPhr+d+3OYi118k/1JawrD3Qu593L7c9ii8SmtVxvN8UbX/7K/IZf/zXpYbYxPTt9+xkdDrvwZE4LgbfiZX+24nqUrcP2W+rsxUoG+16eWfGP+WNKb2eBlvWBN2Okcg89lvQ5T6pnfeEMSPc2SXYNw1kJmDazunPXHeuaUynkI3hW7cldhcEERVyQo3XMILtXD/q4Xn71mDfVlRSSE4JIWVh143dbdfgVBDsFpNVUPyI50H7kcD8GpL0wdJLRhEosQ6jdWEoTj6e+DXN9hEr1+457fz/hszllw0DVMCVk9czrLURBe9Y+D9GXYqj6f/m/PFQSwX9KSi5ZzxkdrrobBWMQ3DnOBSGPSIwh3+drsFQQbpe+tP2zNqX/0uko3DymlDmf9ac6hdV2Rw2sTu68px+BdeSXMlGolglz72V+35ui1dOCEwbX/qnIYheOBr9F/sWF4uR5y46e+NOXMb2ZNlRbOdKa2NjkCZ39N6eMhnvu7mUTGj/rTmNejyexMIor0yH/Y5KO/bc0zBVldA/pDU6dYRdCjcJmuo6dOAswf1KQhCN8vFDCJp84BmcS3uqYA3GstZP2eaiZJ+vq3/rApr60XCo6ujnR1KX0++pvWPCuXq/37qZNK/RYfbflY7z/MdLUA//dc01t/FoFT8BikxtZfyznuv0Jw2M8gWHX/8agnAY/B5X9e/S5dPek5lcYsCt+PTvrB1tB03XX2D435X8+Hf/i/8i/d6VAvhC/4xwAAAABJRU5ErkJggg==",
  },
  permanentAddress: {
    address_line_1: "Moon Apartments",
    address_line_2: "Mars Complex",
    address_line_3: "Jupiter lane",
    address_line_4: "F-19/101",
    city: "Delhi",
    country: "India",
    state: "Delhi",
    zip: "110051",
  },
  PK: "organization",
  SK: "skull-dev",
  drugLicenseNumber: "MH - AKO - 322038",
};

//variables
let content;

let invoiceJson = {
  addedOn: 1626171809083,
  additionalCharges: [
    {
      chargeAmount: "10056",
      chargeDescription: "freight charge",
    },
  ],
  amount: 1000,
  amountPaid: 0,
  contactPerson: {
    contactName: "customer contact person",
    contactPersonEmail: " ",
    contactPersonId: " ",
    contactPersonNumber: "5666004156",
  },
  currency: "INR",
  customerAddress: {
    billingAddress: {
      addressLine1: "ABC-14, Wazirpur Industrial Area, New Delhi",
      addressLine2: "",
      city: "New Delhi",
      country: "India",
      phoneNo: "454464",
      state: "Delhi",
      zipCode: "110069",
    },
    shippingAddress: {
      addressLine1: "ABC-14, Wazirpur Industrial Area, New Delhi",
      addressLine2: "",
      city: "New Delhi",
      country: "India",
      phoneNo: "454464",
      state: "Delhi",
      zipCode: "110069",
    },
  },
  customerEmail: " ",
  customerGSTIN: "27AAFCM0612E1ZZ",
  customerId: "e3721959",
  customerName: "TEST CUSTOMER",
  customerNotes: "test",
  customerNumber: "456456465",
  customerUpiId: "test@icici",
  discount: {
    discountAmount: "100",
    discountDescription: "10%",
  },
  documents: [],
  dueDate: 1624655669000,
  invoiceBankDetails: {
    accountName: "String",
    accountNumber: "String",
    bankName: "String",
    ifscCode: "String",
  },
  invoiceDate: 1623655669000,
  invoiceId: "1c3cf5d9034960d1",
  invoiceLogo: {},
  invoiceNumber: "GOM1236",
  invoiceObject: {},
  invoiceSignature: {},
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
      itemName: "paper paper paper paper paper description",
      itemPrice: "20",
      itemQty: 5,
      itemTax: 18,
      lineNumber: "1",
      taxableAmount: 100,
      uom: "EA",
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
      serialNos: ["s01", "s02"],
      taxableAmount: 100,
      uom: "EA",
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
      serialNos: ["s01", "s02"],
      taxableAmount: 100,
      uom: "EA",
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
      serialNos: ["s01", "s02"],
      taxableAmount: 100,
      uom: "EA",
    },
  ],
  modifiedOn: 1626171809083,
  orderNo: "30056846",
  organizationGSTIN: "26AAACL1069K1ZC",
  paymentTerms: "NET 30",
  PK: "1c3cf5d9034960d1",
  SK: " ",
  taxableAmount: 900,
  tenantId: "skull-dev",
  termsAndConditions: "big ass terms and termsAndConditions",
  vehicleNo: "DL-4567",
  eWayBillNo: "10007821738973",
  uniqueTaxes: { "IGST@15": 30, "IGST@18": 72 },
  invoiceQr:
    "data:image/png;base64,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",
};

let pharmaInvoiceJson = {
  addedOn: 1626285915920,
  additionalCharges: [],
  amount: 47.67,
  amountPaid: 0,
  contactPerson: {
    contactName: "ets",
    contactPersonEmail: "man6399@gmail.com",
    contactPersonId: "",
    contactPersonNumber: "5666004156",
  },
  currency: "INR",
  customerAddress: {
    addressLine1: "",
    addressLine2: "",
    attention: "",
    city: "",
    country: "",
    phoneNumber: "",
    pincode: "",
    state: "",
  },
  customerEmail: "",
  customerGSTIN: "27AAACB2902M1ZT",
  customerId: "419ff561",
  customerNotes: "",
  customerNumber: "",
  customerUpiId: "",
  discount: {
    discountAmount: "",
    discountDescription: "",
  },
  documents: [""],
  dueDate: 1626171538000,
  invoiceBankDetails: {
    accountName: "Riversys Technologies Ltd",
    accountNumber: "462515003100000001",
    bankName: "ICICI BANK RPC DELHI",
    ifscCode: "ICIC0000106",
  },
  invoiceDate: 1626171538000,
  invoiceId: "14365c3b4220abd6",
  invoiceLogo: "",
  invoiceNumber: "INV000000001",
  invoiceObject: {
    addedBy: "",
    addedOn: 1626171547739,
    fileType: "application/pdf",
    isActive: 1,
    isDeleted: 0,
    modifiedBy: "",
    modifiedOn: 1626171547739,
    name: "INV1000",
    path: "tenants/skull/file-uploader",
    sourceFileName: "tenants/skull/file-uploader/1626171547497_kuy30QwLmb.blob",
    url: "https://app.gomigo.io:3006/get?fileName=gomigo-dev/tenants/skull/file-uploader/1626171547497_kuy30QwLmb.blob",
  },
  invoiceSignature: "",
  invoiceStatus: "Unpaid",
  invoiceSubject: "test",
  isDraft: 0,
  isSent: 0,
  lineItems: [
    {
      lineNumber: "1",
      itemCode: "15c150",
      itemName: "paper",
      itemDescription: "paper 200gsm",
      itemQty: 5,
      uom: "EA",
      itemPrice: "20",
      discount: 0,
      itemTax: 18,
      itemAmount: "118",
      itemHsnOrSac: "00564",
      itemId: "15c150",
      taxableAmount: 100,
      batch: "b100",
      manufacturer: "lupin",
      expiryDate: "25/06/2020",
    },
    {
      lineNumber: "1",
      itemCode: "15c150",
      itemName: "paper paper description",
      itemDescription: "paper 200gsm",
      itemQty: 5,
      uom: "EA",
      itemPrice: "20",
      discount: 0,
      itemTax: 18,
      itemAmount: "118",
      itemHsnOrSac: "00564",
      itemId: "15c150",
      taxableAmount: 100,
      batch: "b100",
      manufacturer: "lupin",
      expiryDate: "25/06/2020",
    },
    {
      lineNumber: "1",
      itemCode: "15c150",
      itemName: "paper",
      itemDescription: "paper 200gsm",
      itemQty: 5,
      uom: "EA",
      itemPrice: "20",
      discount: 0,
      itemTax: 18,
      itemAmount: "118",
      itemHsnOrSac: "00564",
      itemId: "15c150",
      taxableAmount: 100,
      batch: "b100",
      manufacturer: "lupin",
      expiryDate: "25/06/2020",
    },
    {
      lineNumber: "1",
      itemCode: "15c150",
      itemName: "paper",
      itemDescription: "paper 200gsm",
      itemQty: 5,
      uom: "EA",
      itemPrice: "20",
      discount: 0,
      itemTax: 18,
      itemAmount: "118",
      itemHsnOrSac: "00564",
      itemId: "15c150",
      taxableAmount: 100,
      batch: "b100",
      manufacturer: "lupin",
      expiryDate: "25/06/2020",
    },
  ],
  modifiedOn: 1626285915920,
  orderNo: "TEST",
  organizationGSTIN: "07AAKCR1346R1ZR",
  paymentTerms: "Due in 30 days",
  doctorName: "Dr. Shaktimaan",
  customerName: "Elon Musk",
  PK: "14365c3b4220abd6",
  SK: " ",
  tax: {
    CGST: {
      taxAmount: "12",
      taxCharge: "9%",
    },
    IGST: {
      taxAmount: "12",
      taxCharge: "9%",
    },
    SGST: {
      taxAmount: "12",
      taxCharge: "9%",
    },
  },
  taxableAmount: "40.40",
  tenantId: "skull-dev",
  termsAndConditions: "Some Terms and condition",
  billType: "",
};

content = pug.renderFile("template.pug", {
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

fs.writeFile("template_html.html", content, function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log("hello");
});

PdfService.createPdf("A5");
