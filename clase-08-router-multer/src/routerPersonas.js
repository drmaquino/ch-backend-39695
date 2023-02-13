import { Router } from 'express'
import { inMemoryManager } from './managers/InMemoryManager.js'
import Persona from './Persona.js'

const routerPersonas = Router()

routerPersonas.get('/:dni', (req, res) => {
    const dniBuscado = req.params.dni
    const persona = inMemoryManager.recuperarUnoSegunIdentificador({ campo: 'dni', valor: dniBuscado })
    res.json(persona)
})

routerPersonas.get('/', (req, res) => {
    const ciudad = req.query.ciudad
    let personas
    if (ciudad) {
        personas = inMemoryManager.recuperarTodosSegunCriterio({ campo: 'ciudad', valor: ciudad })
    } else {
        personas = inMemoryManager.recuperarTodosSegunCriterio()
    }
    res.json(personas)
})

routerPersonas.post('/', (req, res) => {
    try {
        const datosPersona = req.body
        const persona = new Persona(datosPersona)
        const personaGuardada = inMemoryManager.guardar(persona)
        res.status(201).json(personaGuardada)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

export default routerPersonas