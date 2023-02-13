class InMemoryManager {
    constructor() {
        this.elementos = []
    }

    guardar(elemento) {
        this.elementos.push(elemento)
        return elemento
    }

    // @ts-ignore
    recuperarTodosSegunCriterio({ campo, valor } = {}) {
        if (!campo) {
            return this.elementos
        } else {
            return this.elementos.filter(e => {
                return e[campo] === valor
            })
        }
    }

    recuperarUnoSegunIdentificador({ campo: nombreCampoIdentificador, valor: valorIdentificador }) {
        return this.elementos.find(e => e[nombreCampoIdentificador] === valorIdentificador)
    }
}

export const inMemoryManager = new InMemoryManager()