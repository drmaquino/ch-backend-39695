import fs from 'fs/promises'
import { Cart } from '../Cart.js'

export class CartManager {
    #ruta
    #elementos

    constructor(ruta) {
        this.#ruta = ruta
        this.#elementos = []
    }

    async #leerDesdeArchivo() {
        const json = await fs.readFile(this.#ruta, 'utf-8')
        this.#elementos = JSON.parse(json)
    }

    async #escribirAlArchivo() {
        const nuevoJson = JSON.stringify(this.#elementos, null, 2)
        await fs.writeFile(this.#ruta, nuevoJson)
    }

    async crearCarrito() {
        const cart = new Cart()
        await this.#agregar(cart)
        return cart
    }

    async #agregar(elemento) {
        await this.#leerDesdeArchivo()
        this.#elementos.push(elemento)
        await this.#escribirAlArchivo()
    }

    async recuperarUnoPorIdentificador(cid) {
        await this.#leerDesdeArchivo()
        return this.#elementos.find(e => e.cid === cid)
    }

    async agregarProductoAlCarrito(cid, pid) {
        const carrito = await this.recuperarUnoPorIdentificador(cid)
        carrito.agregarProd(pid)
        await this.#reemplazarUnoPorIdentificador(cid, carrito)
    }

    async quitarProductoDelCarrito(cid, pid) {
        const carrito = await this.recuperarUnoPorIdentificador(cid)
        carrito.quitarProd(pid)
        await this.#reemplazarUnoPorIdentificador(cid, carrito)
    }

    async #reemplazarUnoPorIdentificador(cid, nuevoElemento) {
        await this.#leerDesdeArchivo()
        const indice = this.#elementos.findIndex(e => e.cid === cid)
        if (indice === -1) throw new Error('no lo encontré')
        this.#elementos[indice] = nuevoElemento
        await this.#escribirAlArchivo()
    }

    async borrarUnoPorIdentificador(cid) {
        await this.#leerDesdeArchivo()
        const indice = this.#elementos.findIndex(e => e.cid === cid)
        this.#elementos.splice(indice, 1)
        await this.#escribirAlArchivo()
    }
}
