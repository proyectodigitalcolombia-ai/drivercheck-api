const express = require("express")
const router = express.Router()

// Ruta para probar en el navegador
router.get("/check", (req, res) => {
  res.json({
    message: "Endpoint funcionando",
    method: "Usa POST para verificar conductores"
  })
})

// Ruta real de verificación
router.post("/check", (req, res) => {

  const { license } = req.body

  if (!license) {
    return res.status(400).json({
      error: "License es requerido"
    })
  }

  res.json({
    license: license,
    status: "valid",
    points: 12,
    message: "Licencia válida"
  })

})

module.exports = router
