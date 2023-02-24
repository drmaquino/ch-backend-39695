import { Router } from 'express';
import { productManager } from '../managers/products.manager.js'

export const apiRouter = Router();

apiRouter.get('/products', (req, res) => {
    const productos = productManager.obtenerTodos()
    res.json(productos);
});
