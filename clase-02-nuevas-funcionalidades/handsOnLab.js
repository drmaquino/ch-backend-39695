class TicketManager {
    static #precioBaseGanancia = 0.15;
    #eventos

    constructor() {
        this.#eventos = [];
    }

    getEventos() {
        return this.#eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) {
        const evento = {
            nombre,
            lugar,
            precio: precio + precio * TicketManager.#precioBaseGanancia,
            capacidad,
            fecha,
            participantes: []
        }
        if (this.#eventos.length === 0) {
            evento.id = 1;
        } else {
            evento.id = this.#eventos[this.#eventos.length - 1].id + 1;
        }
        this.#eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.#eventos.find(e => e.id === idEvento);
        if (!evento) {
            throw new Error("Evento no encontrado");
        }
        const usuarioRegistrado = evento.participantes.includes(idUsuario);
        if (usuarioRegistrado) {
            throw new Error("Usuario ya registrado");
        }
        evento.participantes.push(idUsuario);
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const evento = this.#eventos.find(e => e.id === idEvento);
        if (!evento) {
            throw new Error("Evento no encontrado");
        }
        const newEvento = {
            ...evento,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.#eventos[this.#eventos.length - 1].id + 1,
            participantes: []
        }
        this.#eventos.push(newEvento);
    }
}

//Pruebas

const manejadorEventos = new TicketManager();
manejadorEventos.agregarEvento('Evento coder 1', 'Argentina', 200, 50);
manejadorEventos.agregarUsuario(1, 2);
manejadorEventos.ponerEventoEnGira(1, 'Mexico', '30/11/2024');
console.log(manejadorEventos.getEventos());