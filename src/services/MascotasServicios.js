const MascotaModel = require("../models/MascotaSchema");
const UsuarioModel = require("../models/UsuarioSchema");

const obtenerMascotasDelUsuario = async(idUsuario) => {
    try {
        const mascotas = await MascotaModel.find({ duenioId: idUsuario });
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
        const mascota = await MascotaModel.findOne({_id: idMascota});
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
        const usuario = await UsuarioModel.findById(idUsuario); // Cambié find por findById

        if (!usuario) {
            return {
                msg: 'Usuario no encontrado',
                statusCode: 404
            };
        }

        // Asignar el nombre del dueño al body antes de crear la instancia de MascotaModel
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
        console.error("Error al agregar mascota:", error);
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

module.exports = {
    obtenerMascotasDelUsuario,
    obtenerMascota,
    agregarMascota,
    editarMascota,
    eliminarMascotaLogica
};
