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

const agregarTurnos= async (body) => {
    const turnos = body;
    try {
        // Verificar que el argumento sea un array
        if (!Array.isArray(turnos) || turnos.length === 0) {
            return {
                msg: 'El parámetro debe ser un array de turnos',
                statusCode: 400,
            };
        }

        const nuevosTurnos = await TurnoModel.insertMany(turnos);
        
        return {
            msg: 'Turnos agregados con éxito',
            statusCode: 201,
            data: nuevosTurnos,
        };
    } catch (error) {
        console.error('Error al agregar los turnos:', error); 
        return {
            msg: 'Error al agregar los turnos en el servicio',
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
    agregarTurnos,
    reservarTurno
};
