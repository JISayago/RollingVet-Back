const express = require('express');
const { obtenerUnaMascota, editarUnaMascota, eliminarUnaMascotaLogica, agregarImagenAUnaMascota } = require('../controllers/MascotasController');
const router = express.Router();
const multer = require("../middlewares/multer");


router.get("/:id", obtenerUnaMascota );
router.put("/:id", editarUnaMascota);
router.delete("/:id", eliminarUnaMascotaLogica);
router.post(
    "/agregarImagen/:idMascota",
    multer.single("imagen"),
    agregarImagenAUnaMascota
  );

module.exports = router;