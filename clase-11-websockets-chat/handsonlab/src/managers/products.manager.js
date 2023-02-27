class ProductManager {

    constructor() {
        this.productos = [
            {
                nombre: 'mesa',
                precio: 2000
            },
            {
                nombre: 'silla',
                precio: 1000
            }
        ]
    }

    agregar(prod) {
        this.productos.push(prod)
    }

    obtenerTodos() {
        return this.productos
    }
}

export const productManager = new ProductManager()