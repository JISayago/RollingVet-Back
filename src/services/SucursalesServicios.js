const SucursalModel = require("../models/SucursalSchema");

const obtenerSucursales = async() => {
    const sucursales = await SucursalModel.find();
    return {
        sucursales,
        statusCode: 200,
 }
}
const obtenerProducto = async (idSucursal) => {
    const sucursal = await SucursalModel.findOne({_id: idSucursal});
    return {
        sucursal,
        statusCode:200
        
    }
}
const agregarSucursal = async (body) => {
    const nuevaSucursal = new SucursalModel(body);
    await nuevaSucursal.save();
    return {
        msg:'Sucursal agregada con éxito',
        statusCode: 201,
    }
}

const editarSucursal = async (idSucursal,body) => {
    const sucursalActualizada = await SucursalModel.findByIdAndUpdate({ _id: idSucursal }, body, { new: true })
    /*El new = true trae el ultimo modificiado y no el previo. */
    
    return {
        msg: 'Sucursal actualizada con éxito',
        statusCode: 200,
    }
}

const eliminarSucursalFisica = async (idSucursal) => {
    await SucursalModel.findByIdAndDelete({_id:idSucursal})
    return {
        msg: "Sucursal Eliminada",
        statusCode:200,
    }
}
module.exports = {
    obtenerSucursales,
    obtenerProducto,
    agregarSucursal,
    editarSucursal,
    eliminarSucursalFisica
}