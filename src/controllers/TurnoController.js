const serviciosTurnos = require('../services/TurnosServicios');

const obtenerTodosLosTurnosPorFecha = async (req, res) => {
    const fecha = new Date(`${req.params.fecha}T00:00:00.000Z`);
    
    try {
        const result = await serviciosTurnos.obtenerTurnosPorFecha(fecha);
        res.status(result.statusCode).json(result.turnos);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los turnos" });
    }
}

const agregarVariosTurnos = async (req, res) => {
    
    try {
        const result = await serviciosTurnos.agregarTurnos(req.body);
        res.status(result.statusCode).json({ msg: result.msg });
    } catch (error) {
        res.status(500).json({ msg: 'Error al agregar el Turno' });
    }
};

const reservarUnTurno = async (req, res) => {
    const result = await serviciosTurnos.reservarTurno(
        req.params.idTurno,
        req.idUsuario
    );
    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg });
      } else if (result.statusCode === 400) {
        res.status(400).json({ msg: result.msg });
      } else {
        res.status(500).json({ msg: "Error al reservar el turno seleccionado" });
      }
    };



module.exports = {
    obtenerTodosLosTurnosPorFecha,
    agregarVariosTurnos,
    reservarUnTurno
}