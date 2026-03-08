const express = require("express")
const cors = require("cors")
require("dotenv").config()

const driverRoutes = require("./routes/driverRoutes")

const app = express()

app.use(cors())
app.use(express.json())

// Ruta principal
app.get("/", (req, res) => {
  res.send("DriverCheck API funcionando")
})

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "drivercheck-api"
  })
})

// Ruta de prueba
app.get("/test", (req, res) => {
  res.json({
    message: "TEST funcionando"
  })
})

// Conectar rutas de drivers
app.use("/api/drivers", driverRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT)
})
