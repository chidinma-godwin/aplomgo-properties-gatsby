const axios = require("axios")

const validateReCaptcha = async token => {
  const secret_key = process.env.RECAPTCHA_SECRET_KEY
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`

  const response = await axios({ method: "post", url })
  return response.data.success
}

module.exports = validateReCaptcha
