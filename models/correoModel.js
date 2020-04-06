"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(objeto) {
 
  let transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'soyluis.es@hotmail.com', // generated ethereal user
      pass: '63384551' // generated ethereal password
    },
    tls:{
        rejectUnauthorized: false        
    }
  });


  let info = await transporter.sendMail({
    from: 'soyluis.es@hotmail.com', // sender address
    to: 'soyluis.es@hotmail.com', // list of receivers
    subject: "Contacto desde la web✔", // Subject line
    text: "Hello world?", // plain text body
    html: objeto.correo + " envio el siguiente mensaje " + objeto.comentario // html bodys
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    


}

module.exports = {main}

