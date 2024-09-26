const ServicioModel = require("../models/ServicioSchema");

const obtenerServicios = async () => {
    try {
        const servicios = await ServicioModel.find();
        return {
            servicios,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: "Error al obtener servicios",
            statusCode: 500,
        };
    }
};

const agregarServicio = async (body) => {
    try {
        const nuevoServicio = new ServicioModel(body);
        await nuevoServicio.save();
        return {
            msg: 'Servicio agregado con éxito',
            statusCode: 201,
        };
    } catch (error) {
        return {
            msg: "Error al agregar el servicio",
            statusCode: 500,
        };
    }
};

const editarServicio = async (idServicio, body) => {
    try {
        const servicioActualizada = await ServicioModel.findByIdAndUpdate({ _id: idServicio }, body, { new: true });
        if (!servicioActualizada) {
            return {
                msg: 'Servicio no encontrado',
                statusCode: 404,
            };
        }
        return {
            msg: 'Servicio actualizado con éxito',
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: "Error al actualizar el servicio",
            statusCode: 500,
        };
    }
};

const eliminarServicioFisico = async (idServicio) => {
    try {
        const servicioEliminado = await ServicioModel.findByIdAndDelete({ _id: idServicio });
        if (!servicioEliminado) {
            return {
                msg: "Servicio no encontrado",
                statusCode: 404,
            };
        }
        return {
            msg: "Servicio Eliminado",
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: "Error al eliminar el servicio",
            statusCode: 500,
        };
    }
};

module.exports = {
    obtenerServicios,
    agregarServicio,
    editarServicio,
    eliminarServicioFisico
};
