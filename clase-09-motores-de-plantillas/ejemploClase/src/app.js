import express from 'express'

import { usersApiRouter } from './routes/users.api.router.js'
import { usersWebRouter } from './routes/users.web.router.js'

import handlebars from 'express-handlebars'

const app = express()

app.use('/static', express.static('public'))
app.use(express.json())

app.engine('handlebars', handlebars.engine()) // que motor uso?
app.set('views', `./views`) // de que carpeta las saco?
app.set('view engine', 'handlebars') // si quiero renderizar un archivo, pero omito su extension, cual busco por defecto?

app.use('/users', usersWebRouter)
app.use('/api/users', usersApiRouter)

app.listen(8080, () => {
    console.log('conectado')
})