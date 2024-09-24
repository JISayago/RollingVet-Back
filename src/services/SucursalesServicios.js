const SucursalModel = require("../models/SucursalSchema");

const sucursaless = [
    {
      id: 1,
      nombre: "Sucursal Centro",
      direccion: "Av. Principal 123, Ciudad Central",
      numeroContacto: "1122334455",
      correo: "centro@example.com",
      atiendeEmergencias24H: true
    },
    {
      "id": 2,
      "nombre": "Sucursal Norte",
        "direccion": "Calle Norte 456, Barrio Norte",
      "numeroContacto": "1133445566",
      "correo": "norte@example.com",
      "atiendeEmergencias24H": false
    },
    {
      "id": 3,
      "nombre": "Sucursal Sur",
      "direccion": "Av. Sur 789, Barrio Sur",
      "numeroContacto": "1144556677",
      "correo": "sur@example.com",
      "atiendeEmergencias24H": true
    },
    {
      id: 4,
      nombre: "Sucursal Este",
      direccion: "Calle Este 101, Zona Este",
      numeroContacto: "1155667788",
      correo: "este@example.com",
      atiendeEmergencias24H: false
    },
    {
      id: 5,
      nombre: "Sucursal Oeste",
      direccion: "Av. Oeste 202, Zona Oeste",
      numeroContacto: "1166778899",
      correo: "oeste@example.com",
      atiendeEmergencias24H: false
    },
    {
      id: 6,
      nombre: "Sucursal Rural",
      direccion: "Ruta Nacional 33, Km 45",
      numeroContacto: "1177889900",
      correo: "rural@example.com",
      atiendeEmergencias24H: true
    }
  ];
  
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