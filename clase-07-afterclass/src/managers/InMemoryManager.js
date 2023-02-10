export class InMemoryManager {
    constructor() {
        this.elementos = [
            {
                dni: '123',
                nombre: 'marian',
                edad: 30,
            },
            {
                dni: '456',
                nombre: 'zoe',
                edad: 20,
            },
            {
                dni: '789',
                nombre: 'martin',
                edad: 25,
            }
        ]
    }

    recuperarSegunCriterio(nombreCampo, valor) {
        if (nombreCampo && valor) {
            return this.elementos.filter(e => {
                return e[nombreCampo] === valor
            })
        } else {
            return this.elementos
        }
    }

    recuperarUnoPorIdentificador(nombreIdentificador, valor) {
        return this.elementos.find(e => e[nombreIdentificador] === valor)
    }
}