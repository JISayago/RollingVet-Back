require('dotenv').config();
require('../db/config');
const express = require("express");
const cors = require('cors');
class Server{
    constructor() { 
        this.app = express();
        this.port = 3001;
        this.middlewares();
        this.rutas();
    }
    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }
    rutas() {
        this.app.use('/usuarios', require('../routes/UsuariosRutas'));
        this.app.use('/sucursales', require('../routes/SucursalesRutas'));
        this.app.use('/servicios', require('../routes/ServiciosRutas'));
    }
    listen() {
        
        this.app.listen(this.port, () => {
            console.log("servidor levantao",this.port)
        })
    }
}
module.exports = Server;