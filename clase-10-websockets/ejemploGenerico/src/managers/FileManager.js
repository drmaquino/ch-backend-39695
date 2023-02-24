import fs from 'fs/promises'

export class FileManager {
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

    async agregar(elemento) {
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

    async recuperarUnoPorIdentificador(nombreIdentificador, valor) {
        await this.#leerDesdeArchivo()
        return this.#elementos.find(e => e[nombreIdentificador] === valor)
    }

    async reemplazarUnoPorIdentificador(nombreIdentificador, valor, nuevoElemento) {
        await this.#leerDesdeArchivo()
        const indice = this.#elementos.findIndex(e => e[nombreIdentificador] === valor)
        if (indice === -1) throw new Error('no lo encontré')
        this.#elementos[indice] = nuevoElemento
        await this.#escribirAlArchivo()
    }

    async borrarUnoPorIdentificador(nombreIdentificador, valor) {
        await this.#leerDesdeArchivo()
        const indice = this.#elementos.findIndex(e => e[nombreIdentificador] === valor)
        this.#elementos.splice(indice, 1)
        await this.#escribirAlArchivo()
    }
}