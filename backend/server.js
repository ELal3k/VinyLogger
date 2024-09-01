const express = require("express")
const db = require("./config/connection")
const app = express()
const cors = require("cors")

const port = process.env.PORT

app.listen(port, () => console.log(`app is listening to port ${port}`))
