const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Por favor, ingrese un email válido']  
    },
    contrasenia: {
        type: String,
        required: true
    },
    telefono: {
        type: String
    },
    direccion: {
        type: String,
    },
    roles: {
        type: [String],
        required: true,
        enum: ['cliente', 'administrador', 'veterinario','pasante','peluquero','empleado'], 
        default: ['cliente']  
    },  
    esEmpleado: {
        type: Boolean,
        default: false
    },
    mascotas: [{
        mascotaId: {
            type: Schema.Types.ObjectId,
            ref: 'Mascota'
        },  
        nombre: {
            type: String
        },
        fechaNacimiento: {
            type: Date
        },
        tipoDeMascota: {
            type: String
        },
        raza: {
            type: String
        }
    }],
    estaEliminado: {
        type: Boolean,
        default:false
    }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
