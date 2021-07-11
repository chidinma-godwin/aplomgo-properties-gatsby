const nodemailer = require("nodemailer")

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "mail.aplomgo.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "subscription@aplomgo.com", // generated ethereal user
    pass: "Aplomgo123", // generated ethereal password
  },
})

module.exports = transporter
