const express = require('express');
const { obtenerFichasDeMascota, agregarUnaFichaVeterinaria } = require('../controllers/FichaVeterinariaController');
const router = express.Router();


router.post("/:id", agregarUnaFichaVeterinaria );
router.get("/:id", obtenerFichasDeMascota );

module.exports = router;