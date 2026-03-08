const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando")
})

app.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

app.get("/test", (req, res) => {
  res.json({ message: "TEST OK" })
})

app.get("/api/drivers/check", (req, res) => {
  res.json({
    message: "Drivers endpoint funcionando"
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT)
})
