const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ffb79a9bf4308d",
        pass: "971d32dd3a4454"
      }
    });
    
    const mensaje={
        from: "VetyShop Store <noreply@vetyshop.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;