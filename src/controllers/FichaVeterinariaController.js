const servicioFichaVeterinaria = require('../services/FichaVeterinariaServicios');

const obtenerFichasDeMascota = async (req, res) => {
        try {
            const result = await serviciosUsuarios.obtenerPerfilUsuario(id);
            if (result.statusCode === 200) {
                res.status(200).json(result.usuario);
            } else {
                res.status(result.statusCode).json({ msg: result.msg || "Error al obtener el Usuario" });
            }
        } catch (error) {
            console.error("Error al obtener el usuario:", error); // Log del error
            res.status(500).json({ msg: "Error al obtener el Usuario" });
        }
};
    
const agregarUnaFichaVeterinaria = async (req, res) => {
    const mascotaId = req.params.id;
    
    try {
        const result = await servicioFichaVeterinaria.agregarFichaVeterinaria(mascotaId, req.body);
        if (result.statusCode === 201) {
            res.status(201).json({ msg: result.msg });
        } else {
            res.status(result.statusCode).json({ msg: "Error al agregar la Ficha" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

    


module.exports = {
    obtenerFichasDeMascota,
    agregarUnaFichaVeterinaria
};
