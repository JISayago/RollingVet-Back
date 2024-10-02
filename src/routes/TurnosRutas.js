const express = require('express');
const router = express.Router();
const { obtenerTodosLosTurnosPorFecha, agregarVariosTurnos, reservarUnTurno } = require("../controllers/TurnoController");
const auth = require('../middlewares/auth');

router.post("/", agregarVariosTurnos);
router.get("/:fecha", obtenerTodosLosTurnosPorFecha);
router.post(
    "/reserva/:idTurno",
    auth(),
    reservarUnTurno
);

module.exports = router;