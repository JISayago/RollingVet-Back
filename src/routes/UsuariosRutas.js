const express = require('express');
const { obtenerTodasLosUsuarios, obtenerUnUsuario, agregarUnUsuario, editarUnUsuario, eliminarUnUsuarioLogico } = require('../controllers/UsuariosController');
const { obtenerTodasLasMascotasDeUsuario, agregarUnaMascota } = require('../controllers/MascotasController');
const router = express.Router();


router.get("/", obtenerTodasLosUsuarios);
router.get("/:id", obtenerUnUsuario);
router.post("/", agregarUnUsuario);
router.put("/:id", editarUnUsuario);
router.delete("/:id", eliminarUnUsuarioLogico);
router.post("/mascotas/:id", agregarUnaMascota);
router.get("/mascotas/:id", obtenerTodasLasMascotasDeUsuario);

module.exports = router;