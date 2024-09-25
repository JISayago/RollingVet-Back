const serviciosUsuarios = require('../services/UsuarioServicios')

const obtenerTodasLosUsuarios = async (req, res) => {
    const result = await serviciosUsuarios.obtenerUsuarios();
    if (result.statusCode === 200) {
        res.status(200).json(result.usuarios)
    } else {
        res.status(500).json({msg:"Error al obtener los Usuarios"})
    }
}; 

const obtenerUnUsuario = async (req, res) => {
    const id = req.params.id
    const result = await serviciosUsuarios.obtenerUsuario(id);
    if (result.statusCode === 200) {
        res.status(200).json(result.usuario)
    } else {
        res.status(500).json({msg:"Error al obtener el Usuario"})
    }
}

const agregarUnUsuario = async (req, res) => {
    const result = await serviciosUsuarios.agregarUsuario(req.body)
    if (result.statusCode === 201) {
        res.status(201).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al agregar el Usuario" })
    }
}
const editarUnUsuario = async (req, res) => {
    const id = req.params.id
    const result = await serviciosUsuarios.editarUsuario(id,req.body)
    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al actualizar el Usuario" })
    }
}
const eliminarUnUsuarioLogico = async (req, res) => {
    const id = req.params.id
    const result = await serviciosUsuarios.eliminarUsuarioLogico(id)
    console.log(result)
    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al eliminar el Usuario" })
    }

}
module.exports = {
    obtenerTodasLosUsuarios,
    obtenerUnUsuario,
    agregarUnUsuario,
    editarUnUsuario,
    eliminarUnUsuarioLogico
}