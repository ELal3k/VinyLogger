const express = require("express")
const db = require("./config/connection")
const app = express()
const cors = require("cors")
const myRouter = require("./routers/myRouter")

const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/app", myRouter)

app.get("/", (req, res) => {
  res.send("Server Speaking")
})

app.listen(port, () => console.log(`app is listening to port ${port}`))
