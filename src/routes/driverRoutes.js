const express = require("express")
const router = express.Router()

const driverController = require("../controllers/driverController")
const apiKeyMiddleware = require("../middleware/apiKey")

router.post("/check", apiKeyMiddleware, driverController.checkDriver)

module.exports = router
