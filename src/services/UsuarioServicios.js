const UsuarioModel = require("../models/UsuarioSchema");
const FichaVeterinariaModel = require("../models/FichaVeterinariaSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const obtenerUsuarios = async () => {
    try {
        const usuarios = await UsuarioModel.find();
        return {
            usuarios,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: 'Error al obtener usuarios',
            statusCode: 500,
        };
    }
};

const obtenerUsuario = async (idUsuario) => {
    try {
        const usuario = await UsuarioModel.findOne({ _id: idUsuario });
        if (!usuario) {
            return {
                msg: 'Usuario no encontrado',
                statusCode: 404,
            };
        }
        return {
            usuario,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: 'Error al obtener usuario',
            statusCode: 500,
        };
    }
};
const obtenerPerfilUsuario = async (idUsuario) => {
    try {
        const usuario = await UsuarioModel.findOne({ _id: idUsuario });
        if (!usuario) {
            return {
                msg: 'Usuario no encontrado',
                statusCode: 404,
            };
        }
        const fichasMascotas = await FichaVeterinariaModel.find({duenioId: idUsuario})
        return {
            usuario,
            fichasMascotas,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: 'Error al obtener usuario',
            statusCode: 500,
        };
    }
};


const agregarUsuario = async (body) => {
    try {
        const nuevoUsuario = new UsuarioModel(body);
        
        const salt = await bcrypt.genSalt(10);
        nuevoUsuario.contrasenia = await bcrypt.hash(nuevoUsuario.contrasenia, salt);
        
        await nuevoUsuario.save();
        
        console.log("Usuario guardado con éxito");
        
        return {
            msg: 'Usuario agregado con éxito',
            statusCode: 201,
        };
    } catch (error) {
        console.error("Error en agregarUsuario:", error); // Imprime el error
        return {
            msg: 'Error al agregar usuario',
            statusCode: 500,
        };
    }
};


const editarUsuario = async (idUsuario, body) => {
    try {
        const usuarioActualizado = await UsuarioModel.findByIdAndUpdate(
            { _id: idUsuario },
            body,
            { new: true }
        );
        if (!usuarioActualizado) {
            return {
                msg: 'Usuario no encontrado',
                statusCode: 404,
            };
        }
        return {
            msg: 'Usuario actualizado con éxito',
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: 'Error al editar usuario',
            statusCode: 500,
        };
    }
};

const eliminarUsuarioLogico = async (idUsuario) => {
    try {
        const usuarioAEliminar = await UsuarioModel.findByIdAndUpdate(
            { _id: idUsuario },
            { estaEliminado: true },
            { new: true }
        );
        if (!usuarioAEliminar) {
            return {
                msg: 'Usuario no encontrado',
                statusCode: 404
            };
        }
        return {
            msg: 'Usuario eliminado correctamente',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al eliminar el usuario',
            statusCode: 500,
        };
    }
};

const inicioSesion = async (body) => {
    console.log("body",body)
    const usuarioExiste = await UsuarioModel.findOne({ email: body.email }).select('+contrasenia') 
    if (!usuarioExiste) {
        return {
            msg: 'Usuario y/o contraseña incorrectos',
            statusCode: 400
        }
    }
    const compararContrasenias = await bcrypt.compare(
        body.contrasenia,
        usuarioExiste.contrasenia
      );
    if (compararContrasenias) {
        const payload = {
            idUsuario: usuarioExiste._id,
            rol: usuarioExiste.rol
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET);
        const rol = usuarioExiste.rol
        return {
            msg: 'usuario Logeado',
            token,
            rol,
            statusCode:200
        }
    } else {
        
        return {
            msg: 'Usuario y/o contraseña incorrectos',
            statusCode: 400
        }
    }
        
    
}

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    agregarUsuario,
    editarUsuario,
    eliminarUsuarioLogico,
    inicioSesion,
    obtenerPerfilUsuario
};
