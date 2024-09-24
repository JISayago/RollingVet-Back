const mongoose = require("mongoose");

const SucursalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
    },
    numeroContacto: {
        type: String,
        required: true,
        trim: true,
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} no es un correo válido!`
        }
    },
    atiendeEmergencias24H: {
        type: Boolean,
        default: false
    },
});


const SucursalModel = mongoose.model('Sucursal', SucursalSchema);
module.exports = SucursalModel;
