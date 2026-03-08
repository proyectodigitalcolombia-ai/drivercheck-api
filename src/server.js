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
    service: "drivercheck-api",
    time: new Date()
  })
})

// Documentación
app.get("/docs", (req, res) => {
  res.json({
    name: "DriverCheck API",
    endpoints: [
      {
        method: "POST",
        url: "/api/drivers/check"
      }
    ]
  })
})

app.use("/api/drivers", driverRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT)
})
