import express from "express"
import bodyParser from "body-parser" // Query param
import viewEngine from "./configs/view-engine.config"
import webRoutes from "./routes/web.route"
import connectDB from "./configs/connect-database.config"
import * as dotenv from "dotenv"

dotenv.config()

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app)
webRoutes(app)

connectDB()

let port = process.env.PORT || 999

app.listen(port, () => {
    console.log(`Server is running on the port: ${port}`)
})