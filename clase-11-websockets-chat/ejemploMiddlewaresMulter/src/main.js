import express from 'express'
import { apiRouter } from './apiRouter.js'
import { Server } from 'socket.io'

const logger = {
    info: mensaje => {
        console.log(`${Date.now()}: ${mensaje}`)
    }
}

const app = express()
const server = app.listen(8080, () => { console.log('escuchando en 8080') })
const io = new Server(server)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

function alterarPeticion(req, res, next) {
    req.io = io
    req.logger = logger
    next()
}

app.use(alterarPeticion)
app.use('/', apiRouter)
