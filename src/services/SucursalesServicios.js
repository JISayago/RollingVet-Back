const SucursalModel = require("../models/SucursalSchema");

const obtenerSucursales = async () => {
    try {
        const sucursales = await SucursalModel.find();
        return {
            sucursales,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: "Error al obtener las sucursales",
            statusCode: 500
        };
    }
};

const obtenerSucursal = async (idSucursal) => {
    try {
        const sucursal = await SucursalModel.findOne({ _id: idSucursal });
        if (!sucursal) {
            return {
                msg: 'Sucursal no encontrada',
                statusCode: 404
            };
        }
        return {
            sucursal,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: "Error al obtener la sucursal",
            statusCode: 500
        };
    }
};

const agregarSucursal = async (body) => {
    try {
        const nuevaSucursal = new SucursalModel(body);
        await nuevaSucursal.save();
        return {
            msg: 'Sucursal agregada con éxito',
            statusCode: 201,
        };
    } catch (error) {
        return {
            msg: "Error al agregar la sucursal",
            statusCode: 500
        };
    }
};

const editarSucursal = async (idSucursal, body) => {
    try {
        const sucursalActualizada = await SucursalModel.findByIdAndUpdate({ _id: idSucursal }, body, { new: true });
        if (!sucursalActualizada) {
            return {
                msg: 'Sucursal no encontrada',
                statusCode: 404
            };
        }
        return {
            msg: 'Sucursal actualizada con éxito',
            statusCode: 200,
        };
    } catch (error) {
        return { msg: "Error al actualizar la sucursal", statusCode: 500 };
    }
};

const eliminarSucursalFisica = async (idSucursal) => {
    try {
        const sucursalEliminada = await SucursalModel.findByIdAndDelete({ _id: idSucursal });
        if (!sucursalEliminada) {
            return {
                msg: 'Sucursal no encontrada',
                statusCode: 404
            };
        }
        return {
            msg: "Sucursal eliminada",
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: "Error al eliminar la sucursal",
            statusCode: 500
        };
    }
};

module.exports = {
    obtenerSucursales,
    obtenerSucursal,
    agregarSucursal,
    editarSucursal,
    eliminarSucursalFisica
};
