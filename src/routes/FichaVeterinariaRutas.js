const express = require('express');
const { obtenerFichasDeMascota, agregarUnaFichaVeterinaria } = require('../controllers/FichaVeterinariaController');
const router = express.Router();


router.post("/:id", agregarUnaFichaVeterinaria );
router.get("/:id", obtenerFichasDeMascota );
/*router.put("/:id", editarFichaDeMascota);
router.delete("/:id", eliminarFichaDeMascota);*/

module.exports = router;