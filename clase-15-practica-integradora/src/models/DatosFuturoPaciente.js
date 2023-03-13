function validarDni(valor) {
    if (typeof valor !== 'string') throw new Error('el dni es una cadena de caracteres')
    if (isNaN(Number(valor))) throw new Error('el solo contiene caracteres numericos')
    if (!Number.isInteger(Number(valor))) throw new Error('el dni es un numero entero')
    return valor
}

function validarNombre(valor) {
    if (typeof valor !== 'string') throw new Error('el nombre es una cadena de caracteres')
    if (!valor) throw new Error('el nombre no puede estar vacio')
    return valor
}

function validarApellido(valor) {
    if (typeof valor !== 'string') throw new Error('el apellido es una cadena de caracteres')
    if (!valor) throw new Error('el apellido no puede estar vacio')
    return valor
}

function validarEdad(valor) {
    if (typeof valor !== 'number') throw new Error('la edad es un numero')
    if (!Number.isInteger(Number(valor))) throw new Error('la edad es un numero entero')
    if (Number(valor) <= 0) throw new Error('la edad es un numero positivo mayor a cero')
    return Number(valor)
}

export class DatosFuturoPaciente {
    constructor({ dni, nombre, apellido, edad }) {
        this.dni = validarDni(dni)
        this.nombre = validarNombre(nombre)
        this.apellido = validarApellido(apellido)
        this.edad = validarEdad(edad)
    }
}