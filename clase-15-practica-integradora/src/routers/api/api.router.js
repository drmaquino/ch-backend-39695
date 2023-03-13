import { Router, json } from 'express'
import { pacientesRouter } from './pacientes.router.js'
import { errorHandler } from '../../errors/errorApiHandler.js'

export const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/pacientes', pacientesRouter)

apiRouter.use(errorHandler)
