import { productManager } from '../managers/products.manager.js'

export function configureProductsSocket(io, socket) {
    socket.on('nuevoProducto', prod => {
        productManager.agregar(prod)
        io.sockets.emit('productos', productManager.obtenerTodos())
    })

    socket.on('refrescarProductos', () => {
        io.sockets.emit('productos', productManager.obtenerTodos())
    })
}
