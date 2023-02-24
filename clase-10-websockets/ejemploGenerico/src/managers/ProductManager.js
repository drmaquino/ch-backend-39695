import fs from 'fs/promises'
import { Product } from '../Product.js'

export class ProductManager {
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

    async crearProducto() {
        const prod = new Product()
        await this.#agregar(prod)
    }

    async #agregar(elemento) {
        await this.#leerDesdeArchivo()
        this.#elementos.push(elemento)
        await this.#escribirAlArchivo()
    }

    async recuperarSegunCriterio({ campo = null, valor = null } = {}) {
        await this.#leerDesdeArchivo()
        if (!campo) {
            return this.#elementos
        } else {
            return this.#elementos.filter(e => {
                return e[campo] === valor
            })
        }
    }

    async recuperarUnoPorIdentificador(pid) {
        await this.#leerDesdeArchivo()
        return this.#elementos.find(e => e.pid === pid)
    }

    async reemplazarUnoPorIdentificador(pid, nuevoElemento) {
        await this.#leerDesdeArchivo()
        const indice = this.#elementos.findIndex(e => e.pid === pid)
        if (indice === -1) throw new Error('no lo encontré')
        this.#elementos[indice] = nuevoElemento
        await this.#escribirAlArchivo()
    }

    async borrarUnoPorIdentificador(pid) {
        await this.#leerDesdeArchivo()
        const indice = this.#elementos.findIndex(e => e.pid === pid)
        this.#elementos.splice(indice, 1)
        await this.#escribirAlArchivo()
    }
}