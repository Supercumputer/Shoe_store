const nodemailer = require("nodemailer");

require("dotenv").config();

const sendMail = async ({email, html}) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL_NAME,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      const info = await transporter.sendMail({
        from: '"ShoeStore" <no-relply@shoestore.com>', // sender address
        to: email, // list of receivers
        subject: "For got password.", // Subject line
        html: html, // html body
      });
    
      return info

}

module.exports = sendMail