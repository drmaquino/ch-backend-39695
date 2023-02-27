export class PersonasManager {
    constructor() {
        this.personas = [];
    }
    obtenerTodas() {
        return this.personas;
    }
    guardarNueva(persona) {
        this.personas.push(persona)
    }
}
