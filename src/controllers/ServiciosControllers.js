const serviciosServicios = require('../services/ServiciosServicios')

const obtenerTodasLosServicios = async (req, res) => {
    const result = await serviciosServicios.obtenerServicios();
    if (result.statusCode === 200) {
        res.status(200).json(result.servicios)
    } else {
        res.status(500).json({msg:"Error al obtener los servicios"})
    }
};

const agregarUnServicio = async (req, res) => {
    const result = await serviciosServicios.agregarServicio(req.body)
    if (result.statusCode === 201) {
        res.status(201).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al agregar el servicio" })
    }
}
const editarUnServicio = async (req, res) => {
    const id = req.params.id
    const result = await serviciosServicios.editarServicio(id,req.body)
    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al actualizar el servicio" })
    }
}
const eliminarUnServicioFisico = async (req, res) => {
    const id = req.params.id
    const result = await serviciosServicios.eliminarServicioFisico(id)
    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al eliminar el servicio" })
    }

}
module.exports = {
    obtenerTodasLosServicios,
    agregarUnServicio,
    editarUnServicio,
    eliminarUnServicioFisico
}