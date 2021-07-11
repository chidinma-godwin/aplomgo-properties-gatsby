const express = require("express")
const multer = require("multer")
const transporter = require("../utils/transporter")
const validateReCaptcha = require("../utils/validateRecaptcha")

const router = express.Router()

var upload = multer({ storage: multer.memoryStorage() })

router.post("/", upload.single("file"), async (req, res) => {
  const file = req.file
  if (!file) {
    return res.status(400).send({ error: "Please upload a passport" })
  }

  if (await validateReCaptcha(req.body.token)) {
    // send mail with defined transport object
    await transporter.sendMail(
      {
        from: '"Aplom Go. Limited" <subscription@aplomgo.com>',
        to: "info@aplomgo.com", // list of receivers
        subject: "Aplom Go. Subscription Form",
        html: "<h3>See attached new subscription form from a client</h3>",
        attachments: [
          { filename: "subscriptionForm.pdf", content: file.buffer },
        ],
      },
      (error, info) => {
        if (error) {
          return res
            .status(500)
            .send({ error: "Network error! Please try again." })
        }
      }
    )
    res.status(200).send({
      message: "Form submitted successfully. Thank you for subscribing!",
    })
  } else {
    res.status(400).send({
      error: "Recaptcha verification failed! Please check the recaptcha box",
    })
  }
})

module.exports = router
