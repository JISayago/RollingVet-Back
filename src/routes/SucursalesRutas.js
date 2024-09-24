const express = require('express');
const { obtenerTodasLasSucursales, obtenerUnaSucursal, agregarUnaSucursal, editarUnaSucursal, eliminarUnaSucursalFisica } = require('../controllers/SucursalesControllers');
const router = express.Router();


router.get("/", obtenerTodasLasSucursales);
router.get("/:id", obtenerUnaSucursal);
router.post("/", agregarUnaSucursal);
router.put("/:id", editarUnaSucursal);
router.delete("/:id", eliminarUnaSucursalFisica);

module.exports = router;