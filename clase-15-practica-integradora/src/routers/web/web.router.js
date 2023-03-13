import { Router } from 'express'
import { pacientesRouter } from './pacientes.router.js'

export const webRouter = Router()

webRouter.use('/pacientes', pacientesRouter)
