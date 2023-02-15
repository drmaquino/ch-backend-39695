import { Router } from 'express'
import { usersManager } from '../managers/users.manager.js'

export const usersApiRouter = Router()

usersApiRouter.get('/', (req, res) => {
    const users = usersManager.obtenerTodos()
    res.json(users)
})
