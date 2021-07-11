const express = require("express")
const path = require("path")
const serverless = require("serverless-http")

const uploadPdfRoutes = require("./routes/uploadPdf")
const downloadFileRoutes = require("./routes/downloadFile")
const newsletterRoutes = require("./routes/newsletter")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/uploadPdf", uploadPdfRoutes)
app.use("/api/downloadFile", downloadFileRoutes)
app.use("/api/info", newsletterRoutes)

module.exports.handler = serverless(app)
