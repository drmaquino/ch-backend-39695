import { messagesManager } from '../managers/messages.manager.js'

export function configureMessagesSocket(io, socket) {
    socket.on('nuevoUsuario', alias => {
        socket.broadcast.emit('nuevoUsuario', alias)
    })

    socket.on('nuevoMensaje', msg => {
        messagesManager.agregar(msg)
        io.sockets.emit('mensajes', messagesManager.obtenerTodos())
    })

    socket.on('refrescarMensajes', () => {
        io.sockets.emit('mensajes', messagesManager.obtenerTodos())
    })
}
