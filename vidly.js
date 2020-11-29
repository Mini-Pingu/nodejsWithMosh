const debug = require("debug")("app:startup")
const dbDebugger = require("debug")("app:db")
const config = require("config")
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")

const logger = require("./middleware/logger")
// const authenticater = require("./authenticating")
const genres = require("./routes/genres")
const home = require("./routes/home")

const app = express();

app.set('view engine', "pug")
app.set("views", "./views")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet())

app.use("/api/genres", genres)
app.use("/", home)

// console.log("App Name: " + config.get("name"))
// console.log("Mail Name: " + config.get("mail.host"))
// console.log("Mail Password: " + config.get("mail.password"))

if (app.get('env') === "development") {
    app.use(morgan("tiny"))
    debug("Morgan enabled...")
}

app.use(logger)
// app.use(authenticater)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`hosting @ port ${port}`))

