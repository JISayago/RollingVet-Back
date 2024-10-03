const transporter = require("../helpers/nodemailer.config");

const contactoForm = async(cuerpoMail) => {
    await transporter.sendMail({
      from: `${cuerpoMail.email}`, 
      to: `${process.env.GMAIL_USER}`, 
      subject: `${cuerpoMail.asunto}`,
      text: `${cuerpoMail.mensaje}`, 
    });
  
  }

const solicitarPlan = async ( cuerpoMail) => {
  await transporter.sendMail({
    from: `${cuerpoMail.email}`,
    to: `${process.env.GMAIL_USER}`,
    subject: `Solicitud de plan: ${cuerpoMail.plan}`,
    text: `Nombre del solicitante: ${cuerpoMail.nombre} Contacto numérico: ${cuerpoMail.numero}\nCorreo: ${cuerpoMail.email}\nMensaje: ${cuerpoMail.mensaje}. `,
  });
};


const informarCliente = async (cuerpoMail) => {
 
  await transporter.sendMail({
    from: `${process.env.GMAIL_USER}`, 
    to: `${cuerpoMail.email}`,
    subject: `Información sobre el plan ${cuerpoMail.plan}`,
    text: `Hola ${cuerpoMail.nombre}, gracias por tu interés en nuestro plan ${cuerpoMail.plan}.`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 10px; border: 1px solid #ddd; border-radius: 5px; max-width: 400px; margin: 0 auto; text-align: center;">
        <h2 style="color: #4CAF50;">¡Gracias por tu interés, ${cuerpoMail.nombre}!</h2>
        <p>Queremos agradecerte por habernos contactado y por considerar el <strong>${cuerpoMail.plan}</strong> para tu mascota.</p>
        <p>El <strong>${cuerpoMail.plan}</strong> ofrece una variedad de servicios.</p>
        <p>Nos encantaría ayudarte a brindar el mejor cuidado a tu mascota en esta etapa de su vida.</p>
        <p style="font-size: 0.9em; color: #777;">Pronto alguien de la veterinaria se pondrá en contacto contigo.</p>
      </div>
    `, 
  });
};

const pedidoPlan = async (cuerpoMail) => {
  await solicitarPlan(cuerpoMail); 
  await informarCliente(cuerpoMail); 
};


module.exports = {
  contactoForm,
  pedidoPlan,
};