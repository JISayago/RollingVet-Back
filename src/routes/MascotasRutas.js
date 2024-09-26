const express = require('express');
const { obtenerUnaMascota, agregarUnaMascota, editarUnaMascota, eliminarUnaMascotaLogica } = require('../controllers/MascotasController');
const router = express.Router();


router.get("/:id", obtenerUnaMascota );
router.put("/:id", editarUnaMascota);
router.delete("/:id", eliminarUnaMascotaLogica);

module.exports = router;