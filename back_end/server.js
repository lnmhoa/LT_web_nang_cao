import express from 'express'
import dotenv from 'dotenv/config'
import viewEngine from './viewEngine.js'
import initWebRoute from './webRoute.js'
const app = express()
viewEngine(app)
initWebRoute(app)
const port = process.env.PORT

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})