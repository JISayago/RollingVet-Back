// mailRoutes.js
const express = require('express');
const router = express.Router();
const { contactoController, pedidoPlanController } = require('../controllers/EnvioMailController')

router.post('/contacto', contactoController);
router.post('/pedido-plan', pedidoPlanController);

module.exports = router;
