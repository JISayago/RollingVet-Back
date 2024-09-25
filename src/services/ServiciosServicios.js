const ServicioModel = require("../models/ServicioSchema");

const obtenerServicios = async() => {
    const servicios = await ServicioModel.find();
    return {
        servicios,
        statusCode: 200,
 }
}
const agregarServicio = async (body) => {
    const nuevoServicio = new ServicioModel(body);
    await nuevoServicio.save();
    return {
        msg:'Servicio agregado con éxito',
        statusCode: 201,
    }
}

const editarServicio = async (idServicio,body) => {
    const servicioActualizada = await ServicioModel.findByIdAndUpdate({ _id: idServicio }, body, { new: true })
    /*El new = true trae el ultimo modificiado y no el previo. */
    
    return {
        msg: 'Servicio actualizado con éxito',
        statusCode: 200,
    }
}

const eliminarServicioFisico = async (idServicio) => {
    await ServicioModel.findByIdAndDelete({_id:idServicio})
    return {
        msg: "Servicio Eliminado",
        statusCode:200,
    }
}
module.exports = {
    obtenerServicios,
    agregarServicio,
    editarServicio,
    eliminarServicioFisico
}