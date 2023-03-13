import { Router } from 'express'
import { pacientesPostController } from '../../controllers/api/pacientesPost.controller.js'

export const pacientesRouter = Router()
pacientesRouter.post('/', pacientesPostController)
