const express = require('express');
const { obtenerFichasDeMascota, agregarUnaFichaVeterinaria, eliminarUnaFichaVeterinariaFisica } = require('../controllers/FichaVeterinariaController');
const router = express.Router();


router.post("/:id", agregarUnaFichaVeterinaria );
router.get("/:id", obtenerFichasDeMascota );
router.delete("/eliminarFicha/:id/:mascotaId", eliminarUnaFichaVeterinariaFisica );

module.exports = router;