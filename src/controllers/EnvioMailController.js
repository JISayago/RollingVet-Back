const { contactoForm, pedidoPlan } = require('../helpers/mensajes.mail');

const contactoController = async (req, res) => {
  try {
    const cuerpoMail = req.body;
    await contactoForm(cuerpoMail);
    res.status(200).json({ message: 'Correo de contacto enviado exitosamente.' });
  } catch (error) {
    console.error('Error enviando correo de contacto:', error);
    res.status(500).json({ error: 'Error enviando correo de contacto.' });
  }
};

const pedidoPlanController = async (req, res) => {
  try {
    const cuerpoMail  = req.body;
    await pedidoPlan(cuerpoMail);
    res.status(200).json({ message: 'Solicitud de plan enviada exitosamente.' });
  } catch (error) {
    console.error('Error enviando solicitud de plan:', error);
    res.status(500).json({ error: 'Error enviando solicitud de plan.' });
  }
};

module.exports = {
  contactoController,
  pedidoPlanController,
};
