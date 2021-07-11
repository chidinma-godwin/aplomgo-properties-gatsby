const express = require("express")
const { body, validationResult } = require("express-validator")
const transporter = require("../utils/transporter")

const router = express.Router()

router.post(
  "/",
  [body("email").isEmail().normalizeEmail().not().isEmpty().trim().escape()],
  async (req, res) => {
    const { email } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).send({ error: "Please enter your email" })
    }
    try {
      await transporter.sendMail(
        {
          from: '"Aplom Go. Limited" <subscription@aplomgo.com>',
          to: "info@aplomgo.com",
          subject: "Request For More Info Via Email",
          html: `<h3>A client with this email: ${email} is requesting for regular information on latest properties</h3>`,
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
        message: "Request submitted successfully. Thank you for subscribing!",
      })
    } catch (err) {
      return res.status(500).send({ error: "Network error! Please try again." })
    }
  }
)

module.exports = router
