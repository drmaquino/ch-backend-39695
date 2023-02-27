import { Router } from 'express';
import { PersonasManager } from './PersonasManager.js';

const personasManager = new PersonasManager();

export const apiRouter = Router()

apiRouter.get('/personas', (req, res) => {
    res.json(personasManager.obtenerTodas());
})

apiRouter.post('/personas', (req, res) => {
    const persona = req.body
    personasManager.guardarNueva(persona)

    const personas = personasManager.obtenerTodas();
    req['io'].sockets.emit('actualizar', personas)

    res.json(persona)
})
