import { Router } from 'express'
import { pacientesGetController } from '../../controllers/web/pacientesGet.controller.js'

export const pacientesRouter = Router()
pacientesRouter.get('/', pacientesGetController)
