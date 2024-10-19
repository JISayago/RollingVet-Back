const express = require('express');
const { obtenerTodosLosVeterinarios,obtenerTodasLosUsuarios, obtenerUnUsuario, agregarUnUsuario, editarUnUsuario, eliminarUnUsuarioLogico, inicioDeSesion, obtenerPerfilDeUnUsuario, actualizarImagenPerfilDeUnUsuario, cambiarRolDeUnUsuario, reincorporarUsuarioLogicoUnUsuarioLogico, reincorporarEliminarUsuarioLogicoUnUsuarioLogico } = require('../controllers/UsuariosController');
const { obtenerTodasLasMascotasDeUsuario, agregarUnaMascota } = require('../controllers/MascotasController');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');
const router = express.Router();


router.get("/perfilUsuario",auth(), obtenerPerfilDeUnUsuario);
router.get("/", obtenerTodasLosUsuarios);
router.get("/:id", obtenerUnUsuario);
router.post("/ingresar", inicioDeSesion);
router.post("/registrar", agregarUnUsuario);
router.post("/actualizarImagenPerfil",auth(), multer.single("imagen"), actualizarImagenPerfilDeUnUsuario);
router.put("/",auth(), editarUnUsuario);
router.put("/cambioRol/:id", cambiarRolDeUnUsuario);
router.delete("/eliminarPerfil",auth(), eliminarUnUsuarioLogico);
router.post("/habilitarEliminarPerfil/:idUsuario", reincorporarEliminarUsuarioLogicoUnUsuarioLogico);
router.post("/veterinarios", obtenerTodosLosVeterinarios);
router.post("/mascotas/registrar",auth(), agregarUnaMascota);
router.get("/mascotas/:id", obtenerTodasLasMascotasDeUsuario);

module.exports = router;