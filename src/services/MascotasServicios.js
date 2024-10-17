const MascotaModel = require("../models/MascotaSchema");
const UsuarioModel = require("../models/UsuarioSchema");
const cloudinary = require("../helpers/cloudinary.config");
const { default: mongoose } = require("mongoose");

const obtenerMascotasDelUsuario = async(idUsuario) => {
    try {
        const mascotas = await MascotaModel.find({ duenioId: idUsuario, estaEliminada: false });
        return {
            mascotas,
            statusCode: 200
        };
    } catch (error) {
        console.error(error);
        return {
            msg: 'Error al obtener las mascotas del usuario',
            statusCode: 500,
            error: error.message
        };
    }
};

const obtenerMascota = async (idMascota) => {
    try {
        const mascota = await MascotaModel.findById(idMascota);
        if (!mascota) {
            return {
                msg: 'Mascota no encontrada',
                statusCode: 404
            };
        }
        return {
            mascota,
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al obtener la mascota',
            statusCode: 500,
            error: error.message
        };
    }
};

const agregarMascota = async (idUsuario, body) => {
    try {
        const usuario = await UsuarioModel.findById(idUsuario); 

        if (!usuario) {
            return {
                msg: 'Usuario no encontrado',
                statusCode: 404
            };
        }

       
        body.duenioNombre = usuario.nombre;
        body.duenioId = idUsuario;

        const nuevaMascota = new MascotaModel(body);

        const mascotaGuardada = await nuevaMascota.save();
        const usuarioActualizado = await UsuarioModel.findByIdAndUpdate(
            idUsuario,
            {
                $push: {
                    mascotas: {
                        mascotaId: mascotaGuardada._id,
                        nombre: mascotaGuardada.nombre,
                        fechaNacimiento: mascotaGuardada.fechaNacimiento,
                        tipoDeMascota: mascotaGuardada.tipoDeMascota,
                        raza: mascotaGuardada.raza,
                        duenioId: idUsuario
                    }
                }
            },
            { new: true }
        );

        return {
            msg: 'Mascota agregada con éxito',
            statusCode: 201,
            usuario: usuarioActualizado
        };

    } catch (error) {
        return {
            msg: 'Error al agregar mascota',
            statusCode: 500,
            error: error.message
        };
    }
};


const editarMascota = async (idMascota, body) => {
    try {
        const mascotaActualizada = await MascotaModel.findByIdAndUpdate(
            { _id: idMascota }, 
            body, 
            { new: true }
        );
        
        if (!mascotaActualizada) {
            return {
                msg: 'Mascota no encontrada',
                statusCode: 404
            };
        }
        
        return {
            msg: 'Mascota actualizada con éxito',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al actualizar la mascota',
            statusCode: 500,
            error: error.message
        };
    }
};

const eliminarMascotaLogica = async (idMascota) => {
    try {
        const mascotaAEliminar = await MascotaModel.findByIdAndUpdate(
            { _id: idMascota },
            { estaEliminada: true }, 
            { new: true }
        );

        if (!mascotaAEliminar) {
            return {
                msg: 'Mascota no encontrada',
                statusCode: 404
            };
        }

        return {
            msg: 'Mascota eliminada correctamente',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al eliminar la mascota',
            statusCode: 500,
            error: error.message
        };
    }
};

const agregarImagenPerfilMascota = async (idMascota, file) => {
  
    try {
        const mascota = await MascotaModel.findById({_id:idMascota});
        if (!mascota) {
            return {
                msg: 'Mascota no encontrada',
                statusCode: 404
            };
        }
      

        const imagen = await cloudinary.uploader.upload(file.path);
        mascota.imagen = imagen.url; 

        await mascota.save(); 
        const usuarioActualizado = await UsuarioModel.findOneAndUpdate(
            { 'mascotas.mascotaId': idMascota }, 
            { $set: { 'mascotas.$.imagen': imagen.url } }, 
            { new: true }
        );

        return {
            msg: 'Imagen cargada con éxito',
            statusCode: 200,
            usuario: usuarioActualizado
        };

    } catch (error) {
        return {
            msg: 'Error al cargar la imagen de perfil',
            statusCode: 500,
            error: error.message
        };
    }
};

const asignarPlan = async (idMascota,plan) => {
    try {
        const mascotaAsignarPlan = await MascotaModel.findByIdAndUpdate(
            { _id: idMascota },
            { plan: plan }, 
            { new: true }
        );

        if (!mascotaAsignarPlan) {
            return {
                msg: 'Mascota no encontrada',
                statusCode: 404
            };
        }

        return {
            msg: 'Plan asignado correctamente',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al asignar el plan',
            statusCode: 500,
            error: error.message
        };
    }
};
const marcarCastrado = async (idMascota,plan) => {
    try {
        const mascotaAsignarPlan = await MascotaModel.findByIdAndUpdate(
            { _id: idMascota },
            { castrado: true }, 
            { new: true }
        );

        if (!mascotaAsignarPlan) {
            return {
                msg: 'Mascota no encontrada',
                statusCode: 404
            };
        }

        return {
            msg: 'Mascota actualizada correctamente',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al marcar castrado.',
            statusCode: 500,
            error: error.message
        };
    }
};


module.exports = {
    obtenerMascotasDelUsuario,
    obtenerMascota,
    agregarMascota,
    editarMascota,
    eliminarMascotaLogica,
    agregarImagenPerfilMascota,
    asignarPlan,
    marcarCastrado

};
