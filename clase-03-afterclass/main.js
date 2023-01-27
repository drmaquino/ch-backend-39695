class TomadorDeLista {
    //atributos
    listado

    constructor() {
        this.listado = []
    }

    //metodos
    agregarEstudiante({ dni, nombre }) {
        const estudiante = new Estudiante({ dni, nombre })
        this.listado.push(estudiante)
    }

    listarEstudiantes() {
        return this.listado
    }

    ponerPresenteSegunDni(dni) {
        const estudiante = this.listado.find(e => e.dni === dni)
        estudiante.estaPresente = true
    }
}

class Estudiante {
    //atributos
    dni
    nombre
    estaPresente

    constructor({ dni, nombre, estaPresente = false }) {
        // this = {
        //     dni: undefined,
        //     nombre: undefined,
        //     estaPresente: undefined
        // }

        if (dni == undefined) {
            throw new Error('el dni es un campo obligatorio')
        }

        if (nombre == undefined) {
            throw new Error('el nombre es un campo obligatorio')
        }

        this.dni = dni
        this.nombre = nombre

        this.estaPresente = estaPresente
        // return this
    }

    //metodos
}

const tomadorDeLista = new TomadorDeLista()

tomadorDeLista.agregarEstudiante({ dni: '123', nombre: 'marian' })
// tomadorDeLista.agregarEstudiante({ dni: '123' })
console.log(tomadorDeLista.listarEstudiantes())
tomadorDeLista.ponerPresenteSegunDni('123')
console.log(tomadorDeLista.listarEstudiantes())
