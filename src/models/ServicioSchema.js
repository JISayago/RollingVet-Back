const mongoose = require("mongoose");

const ServicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    codigoReferencia: {
        type: String,
        required: true,
        trim: true,
    },
});


const ServcioModel = mongoose.model('Servicio', ServicioSchema);
module.exports = ServcioModel;
