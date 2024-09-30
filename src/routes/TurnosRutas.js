const express = require('express');
const router = express.Router();
const { obtenerTodosLosTurnosPorFecha, agregarUnTurno, reservarUnTurno } = require("../controllers/TurnoController");
const auth = require('../middlewares/auth');

router.post("/", agregarUnTurno);
router.get("/:fecha", obtenerTodosLosTurnosPorFecha);
router.post(
    "/reserva/:idTurno",
    auth(),
    reservarUnTurno
);

module.exports = router;