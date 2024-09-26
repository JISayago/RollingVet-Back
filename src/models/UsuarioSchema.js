const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
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
    rol: {
        type: String,
        required: true,
        enum: ['cliente', 'administrador', 'veterinario','pasante','peluquero','empleado'], 
        default: 'cliente'  
    },  
    esEmpleado: {
        type: Boolean,
        default: false
    },
    mascotas: [{
        _id:false,
        mascotaId: {
            type: mongoose.Schema.Types.ObjectId,
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
},{ id: false });

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
