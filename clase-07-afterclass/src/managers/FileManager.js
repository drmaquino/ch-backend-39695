export class FileManager {
    constructor(ruta) {
        this.ruta = ruta
        this.elementos = []
    }

    agregar(elemento) {
        this.elementos.push(elemento)
    }

    recuperarSegunCriterio({ campo = null, valor = null } = {}) {
        if (!campo) {
            return this.elementos
        } else {
            return this.elementos.filter(e => {
                return e[campo] === valor
            })
        }
    }

    recuperarUnoPorIdentificador(identificador) {

    }
}