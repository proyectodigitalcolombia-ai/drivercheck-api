const { chromium } = require("playwright")

exports.consultar = async (cedula) => {

 const browser = await chromium.launch({ headless: true })

 const page = await browser.newPage()

 await page.goto("https://antecedentes.policia.gov.co:7005/WebJudicial/")

 await page.waitForTimeout(2000)

 const resultado = "Sin antecedentes"

 await browser.close()

 return resultado

}
