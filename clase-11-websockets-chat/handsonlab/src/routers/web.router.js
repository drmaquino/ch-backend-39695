import { Router } from 'express'
import { productManager } from '../managers/products.manager.js'

export const webRouter = Router()

webRouter.get('/products', (req, res) => {
    const productos = productManager.obtenerTodos()
    const hayProductos = productos.length > 0

    res.render('products', {
        title: 'Productos',
        hayProductos,
        productos
    })
})

webRouter.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts', { title: 'Productos en Tiempo Real' })
})

webRouter.get('/chat', (req, res) => {
    res.render('chat', { title: 'Chat' })
})

webRouter.get('/', (req, res) => { res.redirect('/chat') })