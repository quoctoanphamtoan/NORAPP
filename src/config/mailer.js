import nodeMailer from "nodemailer";

let adminEmail = "xudubicu@gmail.com";
let adminpass = "toilatoi123";
let mailport = "465";
let mailhost = 'smtp.gmail.com';
let sendMail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    host: mailhost,
    port: mailport,
    secure: true,
    auth: {
      user: adminEmail,
      pass: adminpass
    }
  });
  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  };
  return transporter.sendMail(options);

};
module.exports = sendMail;
