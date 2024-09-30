const mongoose = require('mongoose');

const TurnoSchema = new mongoose.Schema({
  dia: {
    type: Date,
    required: true,
  },
  hora: {
    type: String, // Alternativamente podrías usar Date, pero con `String` puedes almacenar horas específicas sin problemas
    required: true,
  },
  sucursal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal', // Se asume que hay un esquema de Usuario definido
    required: true,
  },
  motivo: {
    type: String,
    enum: ['consulta veterinaria', 'peluqueria', 'otros'],
    required: true,
  },
  profesional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Se asume que hay un esquema de Usuario definido
    required: true,
  },
  reservado: {
    type: Boolean,
    default: false,
  },
  quienReservo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Se asume que hay un esquema de Usuario definido
    required: function() {
      return this.reservado;
    },
  }
},);

module.exports = mongoose.model('Turno', TurnoSchema);
