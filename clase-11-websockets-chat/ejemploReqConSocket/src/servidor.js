import express from 'express'
import { apiRouter } from './apiRouter.js'

import { Server as SocketIOServer } from 'socket.io'

const app = express()

// creo el servidor http
const servidorConectado = app.listen(8080, () => {
    console.log('conectado a 8080!')
})

// creo el servidor de socketio
const io = new SocketIOServer(servidorConectado)


// configuro el servidor http
// agrego en las req del servidor http un acceso
// al servidor de sockets 
app.use((req, res, next) => {
    req['io'] = io
    next()
})

app.use(express.json())
app.use(express.static('./views'))
app.use('/api', apiRouter)

// configuro el servidor de socketio
io.on('connection', socket => {
    console.log('nuevo cliente conectado!')

    socket.on('nombre', data => {
        console.log(data)
        socket.broadcast.emit('actualizar', data)
    })
})
