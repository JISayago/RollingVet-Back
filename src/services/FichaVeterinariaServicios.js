const FichaVeterinariaModel = require("../models/FichaVeterinariaSchema");
const MascotaModel = require("../models/MascotaSchema");

const obtenerFichasMascota = async (idMascota) => {
    try {
        const fichaVet = await FichaVeterinariaModel.find({ mascotaId: idMascota });
        if (!fichaVet) {
            return {
                msg: 'Ficha no encontrada',
                statusCode: 404,
            };
        }
        return {
            fichaVet,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: 'Error al obtener usuario',
            statusCode: 500,
        };
    }
};

const agregarFichaVeterinaria = async (idMascota, body) => {
    try {
        const mascota = await MascotaModel.findById({_id: idMascota}); 
            if (!mascota) {
                return {
                    msg: 'mascota no encontrado',
                    statusCode: 404
                };
            }
    
            body.duenioNombre = mascota.duenioNombre;
            body.duenioId = mascota.duenioId;
            body.mascotaNombre = mascota.nombre;
            body.mascotaId = mascota._id;
    
            const nuevaFicha = new FichaVeterinariaModel(body);
    
            const fichaGuardada = await nuevaFicha.save();
            const mascotaActualizada = await MascotaModel.findByIdAndUpdate(
                idMascota,
                {
                    $push: {
                        fichas: {
                            fichaId: fichaGuardada._id,
                            fecha: fichaGuardada.fecha,
                            motivo: fichaGuardada.motivo,
                            vistoPor: fichaGuardada.vistoPor,
                            tratamiento: fichaGuardada.tratamiento,
                            estaEliminada: fichaGuardada.estaEliminada,
                        }
                    }
                },
                { new: true }
            );
            
            return {
                msg: 'Ficha agregada con éxito',
                statusCode: 201,
                ficha: fichaGuardada
            };
    
        } catch (error) {
            console.error("Error al agregar la ficha:", error);
            return {
                msg: 'Error al agregar la ficha',
                statusCode: 500,
                error: error.message
            };
        }
    };
    


module.exports = {
    obtenerFichasMascota,
    agregarFichaVeterinaria
};
