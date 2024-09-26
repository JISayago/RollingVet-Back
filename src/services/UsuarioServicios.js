const UsuarioModel = require("../models/UsuarioSchema");

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

const agregarUsuario = async (body) => {
    try {
        const nuevoUsuario = new UsuarioModel(body);
        await nuevoUsuario.save();
        return {
            msg: 'Usuario agregado con éxito',
            statusCode: 201,
        };
    } catch (error) {
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

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    agregarUsuario,
    editarUsuario,
    eliminarUsuarioLogico
};
