const TurnoModel = require("../models/TurnoSchema");


const obtenerTurnosPorFecha = async (dia) => {
    try {
        const turnos = await TurnoModel.find({ dia: dia });
        if (!turnos) {
            return {
                msg: 'No se encontraron turnos en esta fecha',
                statusCode: 404
            };
        }
        return {
            turnos,
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: "Error al obtener los turnos",
            statusCode: 500
        };
    }
};

const agregarTurno = async (body) => {
    try {
        const nuevoTurno = new TurnoModel(body);
        
        console.log("servicio",nuevoTurno)
        await nuevoTurno.save();
        return {
            msg: 'Turno agregado con éxito',
            statusCode: 201,
        };
    } catch (error) {
        return {
            msg: 'Error al agregar el turno servicios',
            statusCode: 500,
        };
    }
};
const reservarTurno = async (idTurno, idReservador) => {
    console.log("datos",{idTurno:idTurno,idReservador:idReservador})
    try {
        const turnoReservar = await TurnoModel.findByIdAndUpdate(
            { _id: idTurno },
            {
                reservado: true,
                quienReservo: idReservador
             }, 
            { new: true }
        );
        if (!turnoReservar) {
            return {
                msg: 'Turno no encontrado',
                statusCode: 404,
            };
        }
        return {
            msg: 'Turno reservado con éxito',
            statusCode: 200,
        };
    } catch (error) {
        return {
            msg: 'Error al reservar el turno',
            statusCode: 500,
        };
    }
};

module.exports = {
    obtenerTurnosPorFecha,
    agregarTurno,
    reservarTurno
};
