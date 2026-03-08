const express = require("express")

const router = express.Router()

const driverController = require("../controllers/driverController")

router.post("/check", driverController.checkDriver)

module.exports = router
