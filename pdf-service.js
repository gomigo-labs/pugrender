const puppeteer = require('puppeteer')
const fs = require('fs')

const createPdf = async (format) => {

    const browser = await puppeteer.launch({
        headless: true
    })
    let htmlContent = fs.readFileSync(`./index_html.html`, 'utf8')

    const page = await browser.newPage()

    await page.setContent(htmlContent, {
        waitUntil: 'domcontentloaded'
    })


    await page.pdf({
        format: format,
        path: `my-invoice.pdf`,
        landscape:true
    })

    await browser.close()


}

module.exports ={createPdf}