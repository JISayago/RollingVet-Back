const jwt = require('jsonwebtoken');

module.exports = () => async (req, res, next) => {
    console.log("llegue al auth",req.header('auth'))
    const token = req.header('auth').trim();
    if (!token) {
        return res.status(401).json({ msg: 'No se proporcionó token' });
    }
  try {
      console.log({token:token,clave:process.env.JWT_SECRET})
      const verificarToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Token verificado:", verificarToken);
      req.idUsuario = verificarToken.idUsuario;
      next();
  } catch (error) {
      console.error("Error al verificar el token:", error); // Imprime el error completo
      return res.status(401).json({ msg: 'Token inválido', error: error.message }); // Opcionalmente incluir el mensaje de error
  }
  
};
