const mongoose = require("mongoose");

const FichaVeterinariaSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
    },
    duenioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
select:false
    },
    duenioNombre: {
        type: String,
        required:true
    },
    mascotaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota',
        required: true
    },
    mascotaNombre: {
        type: String,
        required:true
    },
    motivo: {
        type: String,
        required: true,
    },
    vistoPor: {
        type: String,
        required: true,
        trim: true,
    },
    tratamiento: {
        type: String,
        required: true,
    },
    estaEliminada: {
        type: Boolean,
        default:false
    }
    
},{ id: false });


const FichaVeterinariaModel = mongoose.model('FichaVeterinaria', FichaVeterinariaSchema);
module.exports = FichaVeterinariaModel;
