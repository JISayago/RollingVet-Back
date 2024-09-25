const express = require('express');
const { obtenerTodasLosServicios, agregarUnServicio, editarUnServicio, eliminarUnServicioFisico } = require('../controllers/ServiciosControllers');
const router = express.Router();


router.get("/", obtenerTodasLosServicios);
router.post("/", agregarUnServicio);
router.put("/:id", editarUnServicio);
router.delete("/:id", eliminarUnServicioFisico);

module.exports = router;
    