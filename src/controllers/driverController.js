const policiaService = require("../services/policiaService")
const simitService = require("../services/simitService")
const runtService = require("../services/runtService")
const procuraduriaService = require("../services/procuraduriaService")
const score = require("../utils/score")

exports.checkDriver = async (req, res) => {

 const { documento } = req.body

 try {

  const policia = await policiaService.consultar(documento)
  const simit = await simitService.consultar(documento)
  const runt = await runtService.consultar(documento)
  const procuraduria = await procuraduriaService.consultar(documento)

  const riskScore = score.calcular({
   policia,
   simit
  })

  res.json({
   policia,
   simit,
   runt,
   procuraduria,
   score: riskScore
  })

 } catch (error) {

  console.error(error)

  res.status(500).json({
   error: "Error consultando conductor"
  })

 }

}
