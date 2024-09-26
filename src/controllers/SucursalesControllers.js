const serviciosSucursales = require('../services/SucursalesServicios');

const obtenerTodasLasSucursales = async (req, res) => {
    try {
        const result = await serviciosSucursales.obtenerSucursales();
        res.status(result.statusCode).json(result.sucursales);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener las sucursales" });
    }
};

const obtenerUnaSucursal = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await serviciosSucursales.obtenerSucursal(id);
        if (result.statusCode === 200) {
            res.status(200).json(result.sucursal);
        } else {
            res.status(result.statusCode).json({ msg: result.msg });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la sucursal" });
    }
};

const agregarUnaSucursal = async (req, res) => {
    try {
        const result = await serviciosSucursales.agregarSucursal(req.body);
        res.status(result.statusCode).json({ msg: result.msg });
    } catch (error) {
        res.status(500).json({ msg: "Error al agregar la sucursal" });
    }
};

const editarUnaSucursal = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await serviciosSucursales.editarSucursal(id, req.body);
        res.status(result.statusCode).json({ msg: result.msg });
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar la sucursal" });
    }
};

const eliminarUnaSucursalFisica = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await serviciosSucursales.eliminarSucursalFisica(id);
        res.status(result.statusCode).json({ msg: result.msg });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la sucursal" });
    }
};

module.exports = {
    obtenerTodasLasSucursales,
    obtenerUnaSucursal,
    agregarUnaSucursal,
    editarUnaSucursal,
    eliminarUnaSucursalFisica
};
