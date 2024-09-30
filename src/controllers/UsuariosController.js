const serviciosUsuarios = require('../services/UsuarioServicios');

const obtenerTodasLosUsuarios = async (req, res) => {
    try {
        const result = await serviciosUsuarios.obtenerUsuarios();
        res.status(result.statusCode).json(result.usuarios);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los Usuarios" });
    }
};

const obtenerUnUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await serviciosUsuarios.obtenerUsuario(id);
        if (result.statusCode === 200) {
            res.status(200).json(result.usuario);
        } else {
            res.status(result.statusCode).json({ msg: result.msg || "Error al obtener el Usuario" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el Usuario" });
    }
};
const obtenerPerfilDeUnUsuario = async (req, res) => {
    try {
        const id = req.idUsuario; // Obtener el id del usuario desde el token
        const result = await serviciosUsuarios.obtenerPerfilUsuario(id);
        if (result.statusCode === 200) {
            res.status(200).json(result.usuario);
        } else {
            res.status(result.statusCode).json({ msg: result.msg || "Error al obtener el Usuario" });
        }
    } catch (error) {
        console.error("Error al obtener el usuario:", error); // Log del error
        res.status(500).json({ msg: "Error al obtener el Usuario" });
    }
};


const agregarUnUsuario = async (req, res) => {
    console.log("controller req", req.body);
    try {
        const result = await serviciosUsuarios.agregarUsuario(req.body);
        console.log("Resultado del servicio:", result);  // Verifica qué resultado está devolviendo el servicio
        res.status(result.statusCode).json({ msg: result.msg });
    } catch (error) {
        console.error("Error en agregarUnUsuario:", error);  // Muestra cualquier error que ocurra
        res.status(500).json({ msg: 'Error al agregar el Usuario' });
    }
};


const editarUnUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await serviciosUsuarios.editarUsuario(id, req.body);
        if (result.statusCode === 200) {
            res.status(200).json({ msg: result.msg });
        } else {
            res.status(result.statusCode).json({ msg: result.msg || "Error al actualizar el Usuario" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el Usuario" });
    }
};

const eliminarUnUsuarioLogico = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await serviciosUsuarios.eliminarUsuarioLogico(id);
        if (result.statusCode === 200) {
            res.status(200).json({ msg: result.msg });
        } else {
            res.status(result.statusCode).json({ msg: result.msg || "Error al eliminar el Usuario" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el Usuario" });
    }
};

const inicioDeSesion = async (req, res) => {
    
    const result = await serviciosUsuarios.inicioSesion(req.body);
    if (result.statusCode === 200) {
    res.status(200).json({ msg: result.msg, token: result.token, rol:result.rol});
  } else if (result.statusCode === 400) {
    res.status(400).json({ msg: result.msg });
  } else {
    res.status(500).json({ msg: "Error al iniciar sesion del usuario" });
  }
}

module.exports = {
    obtenerTodasLosUsuarios,
    obtenerUnUsuario,
    agregarUnUsuario,
    editarUnUsuario,
    eliminarUnUsuarioLogico,
    inicioDeSesion,
    obtenerPerfilDeUnUsuario
};
