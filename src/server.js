const express = require("express")
const cors = require("cors")

const driverRoutes = require("./routes/driverRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/drivers", driverRoutes)

app.get("/", (req, res) => {
  res.send("DriverCheck API funcionando")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT)
})
