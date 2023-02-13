export default class Persona {
    constructor({ dni, nombre, ciudad }) {
        if (!dni) throw new Error('falta el dni')
        this.dni = dni

        if (!nombre) throw new Error('falta el nombre')
        this.nombre = nombre

        if (!ciudad) throw new Error('falta el ciudad')
        this.ciudad = ciudad
    }
}