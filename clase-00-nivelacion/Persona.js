class Persona {
    // let this
    nombre // no es obligatorio
    edad // no es obligatorio
    static nombreClase = 'Persona'

    constructor(nombre, edad) {
        // this = {}
        this.nombre = nombre
        this.edad = edad
        // return this
    }

    static verNombreClase() {
        console.log('esto es la clase ' + Persona.nombreClase)
    }

    saludar() {
        console.log('hola, soy ' + this.nombre)
    }
}

const p1 = new Persona('marian', 36)
p1.saludar()

const p2 = new Persona('rocio', 20)
p2.saludar()

console.log(p1)
console.log(p2)
console.log(Persona)

Persona.verNombreClase()