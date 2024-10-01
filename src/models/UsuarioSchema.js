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
        required: true,
        select:false
    },
    telefono: {
        type: String,
        default:'-'
    },
    direccion: {
        type: String,
        default:'-'
    },
    rol: {
        type: String,
        required: true,
        enum: ['Cliente', 'Administrador', 'Veterinario','Pasante','Peluquero','Empleado'], 
        default: 'Cliente'  
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
        },
        plan: {
            type: String,
            default: "Sin Plan"
        }
    }],
    estaEliminado: {
        type: Boolean,
        default:false
    }
},{ id: false });

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
