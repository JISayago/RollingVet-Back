const express = require('express');
const { obtenerUnaMascota, editarUnaMascota, eliminarUnaMascotaLogica, agregarImagenAUnaMascota, asignarUnPlanAUnaMascota, marcarCastradoDeUnaMascota } = require('../controllers/MascotasController');
const router = express.Router();
const multer = require("../middlewares/multer");
const { agregarUnaVacunaAUnaMascota, agregarUnaProximaVisitaAUnaMascota } = require('../controllers/FichaVeterinariaController');


router.get("/:id", obtenerUnaMascota );
router.put("/:id", editarUnaMascota);
router.post("/castrar/:id", marcarCastradoDeUnaMascota);
router.delete("/:id", eliminarUnaMascotaLogica);
router.post(
    "/agregarImagen/:idMascota",
    multer.single("imagen"),
    agregarImagenAUnaMascota
);
  router.post("/asignarPlan/:idMascota",asignarUnPlanAUnaMascota)
  router.post("/agregarVacuna/:idMascota",agregarUnaVacunaAUnaMascota)
  router.post("/agregarProximaVisita/:idMascota",agregarUnaProximaVisitaAUnaMascota)

module.exports = router;