const mongoose = require("mongoose");

const MascotaSchema = new mongoose.Schema({
    nombre:
    {
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
        default:"Mestizo"
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
    duenioNombre: {
        type: String,
        required:true
    },
    duenioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    /*planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    },  
    historialVisitasId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HistorialVisitas'
    },*/  
    /*historialVacunasId: {
        type: Schema.Types.ObjectId, ref: 'HistorialVacunas'
    }  */
  });
  
  const Mascota = mongoose.model('Mascota', MascotaSchema);
  module.exports = Mascota;
  