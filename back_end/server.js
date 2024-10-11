import express from 'express'
import dotenv from 'dotenv/config'
import viewEngine from './viewEngine.js'
import initWebRoute from './webRoute.js'
import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
viewEngine(app)
initWebRoute(app)
const port = process.env.PORT

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})