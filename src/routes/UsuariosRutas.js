const express = require('express');
const { obtenerTodasLosUsuarios, obtenerUnUsuario, agregarUnUsuario, editarUnUsuario, eliminarUnUsuarioLogico } = require('../controllers/UsuariosController');
const router = express.Router();


router.get("/", obtenerTodasLosUsuarios);
router.get("/:id", obtenerUnUsuario );
router.post("/", agregarUnUsuario);
router.put("/:id", editarUnUsuario);
router.delete("/:id", eliminarUnUsuarioLogico);

module.exports = router;