import { CartManager } from './managers/CartManager.js';

const cm = new CartManager()
const carrito = await cm.crearCarrito()
console.log(carrito)
