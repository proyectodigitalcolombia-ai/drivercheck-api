const express = require("express")
const cors = require("cors")
require("dotenv").config()

const driverRoutes = require("./routes/driverRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/drivers", driverRoutes)

app.listen(process.env.PORT, () => {
 console.log("Servidor corriendo en puerto " + process.env.PORT)
})
