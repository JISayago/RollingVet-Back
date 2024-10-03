const jwt = require('jsonwebtoken');

module.exports = () => async (req, res, next) => {
    const token = req.header('auth');
    if (!token) {
        return res.status(401).json({ msg: 'No se proporcionó token' });
    }
  try {
      const verificarToken = jwt.verify(token, process.env.JWT_SECRET);
      req.idUsuario = verificarToken.idUsuario;
      next();
  } catch (error) {
      return res.status(401).json({ msg: 'Token inválido', error: error.message });
  }
  
};
