const UsuarioModel = require("../models/UsuarioSchema");

const obtenerUsuarios = async() => {
    const usuarios = await UsuarioModel.find();
    return {
        usuarios,
        statusCode: 200,
 }
}
const obtenerUsuario = async (idUsuario) => {
    const usuario = await UsuarioModel.findOne({_id: idUsuario});
    return {
        usuario,
        statusCode:200
        
    }
}
const agregarUsuario = async (body) => {
    const nuevoUsuario = new UsuarioModel(body);
    await nuevoUsuario.save();
    return {
        msg:'Usuario agregado con éxito',
        statusCode: 201,
    }
}

const editarUsuario = async (idUsuario,body) => {
    const usuarioActualizado = await UsuarioModel.findByIdAndUpdate({ _id: idUsuario }, body, { new: true })
    /*El new = true trae el ultimo modificiado y no el previo. */
    
    return {
        msg: 'Usuario actualizado con éxito',
        statusCode: 200,
    }
}

const eliminarUsuarioLogico = async (idUsuario) => {
    try {
        const usuarioAEliminar = await UsuarioModel.findByIdAndUpdate(
            { _id: idUsuario },
            { estaEliminado: true }, 
            { new: true }  
            /*El new = true trae el ultimo modificiado y no el previo. */
        );
        if (!usuarioAEliminar) {
            return { msg: 'Usuario no encontrado' };
        }

        return { msg: 'Usuario eliminado correctamente',
        statusCode: 200,};
    } catch (error) {
        return { msg: 'Error al eliminar el Usuario',
        statusCode: 500, };
    }
};
module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    agregarUsuario,
    editarUsuario,
    eliminarUsuarioLogico
}