const express = require("express")
const cors = require("cors")
require("dotenv").config()

const driverRoutes = require("./routes/driverRoutes")

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// ruta principal
app.get("/", (req, res) => {
 res.send("DriverCheck API funcionando")
})

/*
Health check
Sirve para monitoreo del servidor
*/
app.get("/health", (req, res) => {
 res.json({
  status: "ok",
  service: "drivercheck-api",
  time: new Date()
 })
})

/*
Documentación básica de la API
*/
app.get("/docs", (req, res) => {
 res.json({
  name: "DriverCheck API",
  version: "1.0",
  endpoints: [
   {
    method: "POST",
    url: "/api/drivers/check",
    description: "Consulta antecedentes de conductor",
    body: {
     documento: "string"
    }
   }
  ]
 })
})

// rutas del sistema
app.use("/api/drivers", driverRoutes)

// puerto
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
 console.log("Servidor corriendo en puerto " + PORT)
})
