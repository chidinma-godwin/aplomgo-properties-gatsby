const express = require("express")
const fs = require("fs")
const path = require("path")

const router = express.Router()

router.post("/", (req, res) => {
  const src = fs.createReadStream(
    path.resolve(__dirname, `subscriptionForms/${req.body.fileName}`)
  )

  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=subscription.pdf",
    "Content-Transfer-Encoding": "Binary",
  })

  src.pipe(res)
})

module.exports = router
