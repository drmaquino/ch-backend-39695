import { randomUUID } from 'crypto'

export class Cart {
    #productos

    constructor(id = randomUUID()) {
        this.id = id
        this.#productos = []
    }

    agregarProd(pid) {
        // recorrer los productos.
        // si no existe. agrego un { pid, cant: 1 }
        // si ya existe, incremento la cantidad
    }

    quitarProd(pid) {
        // recorrer los productos.
        // si no existe. throw new Error!
        // si quedaba solo uno, lo borro
        // sino, decremento la cantidad
    }
} 