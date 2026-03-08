const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// home
app.get("/", (req, res) => {
  res.send("DriverCheck API funcionando")
})

// health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

// endpoint para verificar conductor
app.get("/api/drivers/check/:doc", (req, res) => {

  const doc = req.params.doc

  res.json({
    document: doc,
    police: "sin antecedentes",
    procuraduria: "sin sanciones",
    score: 92
  })

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT)
})
