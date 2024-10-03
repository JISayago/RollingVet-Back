const mongoose = require("mongoose");

const MascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    tipoDeMascota: {
        type: String,
        required: true
    },  
    raza: {
        type: String,
        default: "Mestizo"
    },
    castrado: {
        type: Boolean,
        default: false
    },
    estaEliminada: {
        type: Boolean,
        default: false
    },
    plan: {
        type: String,
        default: "Sin Plan"
    },
    imagen: {
        type: String,
      default:"https://res.cloudinary.com/dqhdgsolz/image/upload/v1727904340/xxveal5isyfynsqniid1.jpg"  
    },
    duenioNombre: {
        type: String,
        required: true
    },
    duenioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fichas: [{
        _id:false,
        fichaId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FichaVeterinaria',
        },
        fecha: {
            type: Date,
        },
        motivo: {
            type: String,
        },
        vistoPor: {
            type: String,
        },
        tratamiento: {
            type: String,
        },
        estaEliminada: {
            type: Boolean,
        }
    }], 
    /*planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    },  
    /*historialVacunasId: {
        type: Schema.Types.ObjectId, ref: 'HistorialVacunas'
    }  */
});

const Mascota = mongoose.model('Mascota', MascotaSchema);
module.exports = Mascota;
