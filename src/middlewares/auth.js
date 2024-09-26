const jwt = require('jsonwebtoken');

module.exports = (rol) => (req, res, next) => {
    const token = req.header('auth')
    const verificarToken = jwt.verify(token,process.env.JWT_SECRET)
    console.log("token", verificarToken);
    //va pal middle de las rutas correspondientes
    

}