const puppeteer = require("puppeteer");
const fs = require("fs");
const imageToBase64 = require("image-to-base64");

const createPdf = async (format) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  let htmlContent = fs.readFileSync(`./salesOrder_html.html`, "utf8");

  const page = await browser.newPage();

  await page.setContent(htmlContent, {
    waitUntil: "domcontentloaded",
  });

  await page.pdf({
    format: format,
    path: `salesOrder.pdf`,
    landscape: false,
  });

  await browser.close();
};

const createBase64 = (url) => {
  let image;
  imageToBase64(url) // Path to the image
    .then((response) => {
      return response; // "cGF0aC90by9maWxlLmpwZw=="
    })
    .catch((error) => {
      console.log(error); // Logs an error if there was one
    });

  return image;
};

module.exports = { createPdf };
