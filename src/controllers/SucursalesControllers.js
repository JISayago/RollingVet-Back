const serviciosSucursales = require('../services/SucursalesServicios')

const obtenerTodasLasSucursales = async (req, res) => {
    const result = await serviciosSucursales.obtenerSucursales();
    if (result.statusCode === 200) {
        res.status(200).json(result.sucursales)
    } else {
        res.status(500).json({msg:"Error al obtener las Sucursales"})
    }
};

const obtenerUnaSucursal = async (req, res) => {
    const id = req.params.id
    const result = await serviciosSucursales.obtenerProducto(id);
    if (result.statusCode === 200) {
        res.status(200).json(result.sucursal)
    } else {
        res.status(500).json({msg:"Error al obtener la Sucursal"})
    }
}

const agregarUnaSucursal = async (req, res) => {
    const result = await serviciosSucursales.agregarSucursal(req.body)
    if (result.statusCode === 201) {
        res.status(201).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al agregar la Sucursal" })
    }
}
const editarUnaSucursal = async (req, res) => {
    const id = req.params.id
    const result = await serviciosSucursales.editarSucursal(id,req.body)
    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al actualizar la Sucursal" })
    }
}
const eliminarUnaSucursalFisica = async (req, res) => {
    const id = req.params.id
    const result = await serviciosSucursales.eliminarSucursalFisica(id)
    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: "Error al eliminar la Sucursal" })
    }

}
module.exports = {
    obtenerTodasLasSucursales,
    obtenerUnaSucursal,
    agregarUnaSucursal,
    editarUnaSucursal,
    eliminarUnaSucursalFisica
}