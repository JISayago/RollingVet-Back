const express = require('express');
const { obtenerTodasLosUsuarios, obtenerUnUsuario, agregarUnUsuario, editarUnUsuario, eliminarUnUsuarioLogico, inicioDeSesion } = require('../controllers/UsuariosController');
const { obtenerTodasLasMascotasDeUsuario, agregarUnaMascota } = require('../controllers/MascotasController');
const auth = require('../middlewares/auth');
const router = express.Router();


router.get("/", obtenerTodasLosUsuarios);
router.get("/:id", obtenerUnUsuario);
router.post("/ingresar", inicioDeSesion);
router.post("/", agregarUnUsuario);
router.put("/:id", editarUnUsuario);
router.delete("/:id", eliminarUnUsuarioLogico);
router.post("/mascotas/:id", agregarUnaMascota);
router.get("/mascotas/:id", obtenerTodasLasMascotasDeUsuario);

module.exports = router;