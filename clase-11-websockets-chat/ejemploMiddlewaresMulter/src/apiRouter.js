import { Router } from 'express'
import { mid1, mid2 } from './middlewares.js'
import { getController, postController } from './controllers.js'

import multer from 'multer'
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

export const apiRouter = Router()

apiRouter.get('/', mid1, mid2, getController)

apiRouter.post('/', upload.single('adjunto'), postController)
