const servicioMascota = require('../services/MascotasServicios');

const obtenerTodasLasMascotasDeUsuario = async (req, res) => {
    const usuarioId = req.params.id;

    try {
        const result = await servicioMascota.obtenerMascotasDelUsuario(usuarioId);
        if (result.statusCode === 200) {
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
    const idUsuario = req.params.id;

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

module.exports = {
    obtenerTodasLasMascotasDeUsuario,
    obtenerUnaMascota,
    agregarUnaMascota,
    editarUnaMascota,
    eliminarUnaMascotaLogica
};