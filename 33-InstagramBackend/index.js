const express = require("express")
require('dotenv').config()
require('./src/config/db.js')
const bodyParser = require("body-parser")
const routes = require('./src/routes/userRoute.js')
const PORT = process.env.PORT || 4500


const app = express()

app.use(bodyParser.json())

app.use("/", routes)


app.listen(PORT, () => {
    console.log("Server has started!")
})