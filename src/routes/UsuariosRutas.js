const express = require('express');
const { obtenerTodasLosUsuarios, obtenerUnUsuario, agregarUnUsuario, editarUnUsuario, eliminarUnUsuarioLogico, inicioDeSesion, obtenerPerfilDeUnUsuario } = require('../controllers/UsuariosController');
const { obtenerTodasLasMascotasDeUsuario, agregarUnaMascota } = require('../controllers/MascotasController');
const auth = require('../middlewares/auth');
const router = express.Router();


router.get("/perfilUsuario",auth(), obtenerPerfilDeUnUsuario);
router.get("/", obtenerTodasLosUsuarios);
router.get("/:id", obtenerUnUsuario);
router.post("/ingresar", inicioDeSesion);
router.post("/registrar", agregarUnUsuario);
router.put("/:id", editarUnUsuario);
router.delete("/:id", eliminarUnUsuarioLogico);
router.post("/mascotas/registrar",auth(), agregarUnaMascota);
router.get("/mascotas/:id", obtenerTodasLasMascotasDeUsuario);

module.exports = router;