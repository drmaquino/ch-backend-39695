import express from 'express'
import routerPersonas from './routerPersonas.js'

const app = express()

app.use('/static', express.static('./public'))

// esto es para recibir json en el cuerpo de la peticion
app.use(express.json())

// esto es para recibir datos desde un formulario, pq los envia via url
app.use(express.urlencoded({ extended: true }))

app.use('/api/personas', routerPersonas)

const puerto = 8080
app.listen(puerto, () => {
    console.log(`conectado a ${puerto}`)
})


