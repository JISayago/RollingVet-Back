const servicioMascota = require('../services/MascotasServicios');

const obtenerTodasLasMascotasDeUsuario = async (req, res) => {
    const usuarioId = req.params.id;
    console.log("obtenertodaslasmascotas")

    try {
        const result = await servicioMascota.obtenerMascotasDelUsuario(usuarioId);
        if (result.statusCode === 200) {
            console.log("mascotasControl",result.mascotas)
            res.status(200).json(result.mascotas);
        } else {
            res.status(result.statusCode).json({ msg: "Error al obtener las Mascotas" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

const obtenerUnaMascota = async (req, res) => {
    const id = req.params.id;
   console.log("id controller previo try",id)
    try {
        const result = await servicioMascota.obtenerMascota(id);
        if (result.statusCode === 200) {
            res.status(200).json(result.mascota);
        } else {
            res.status(result.statusCode).json({ msg: "Error al obtener la Mascota" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

const agregarUnaMascota = async (req, res) => {
    const idUsuario = req.idUsuario;

    try {
        const result = await servicioMascota.agregarMascota(idUsuario, req.body);
        if (result.statusCode === 201) {
            res.status(201).json({ msg: result.msg });
        } else {
            res.status(result.statusCode).json({ msg: "Error al agregar la mascota" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

const editarUnaMascota = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await servicioMascota.editarMascota(id, req.body);
        if (result.statusCode === 200) {
            res.status(200).json({ msg: result.msg });
        } else {
            res.status(result.statusCode).json({ msg: "Error al actualizar la mascota" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

const eliminarUnaMascotaLogica = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await servicioMascota.eliminarMascotaLogica(id);
        if (result.statusCode === 200) {
            res.status(200).json({ msg: result.msg });
        } else {
            res.status(result.statusCode).json({ msg: "Error al eliminar la Mascota" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

const agregarImagenAUnaMascota = async (req, res) => {
  
    const result = await servicioMascota.agregarImagenPerfilMascota(
        req.params.idMascota,
        req.file);
  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al agregar la imagen a la mascota" });
    }
  };
const asignarUnPlanAUnaMascota = async (req, res) => {
    const result = await servicioMascota.asignarPlan(
        req.params.idMascota,
        req.body.plan);
  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al actualizar el plan de la mascota." });
    }
};
const marcarCastradoDeUnaMascota = async (req, res) => {

    const result = await servicioMascota.marcarCastrado(req.params.id)  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al actualizar la mascota." });
    }
};

module.exports = {
    obtenerTodasLasMascotasDeUsuario,
    obtenerUnaMascota,
    agregarUnaMascota,
    editarUnaMascota,
    eliminarUnaMascotaLogica,
    agregarImagenAUnaMascota,
    asignarUnPlanAUnaMascota,
    marcarCastradoDeUnaMascota
};
