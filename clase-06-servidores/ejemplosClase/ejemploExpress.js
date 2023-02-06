const express = require('express')

function controladorHola(req, res) {
    res.send(`hola ${req.params.nombre} [${req.params.apellido}]!!`)
}

function controladorChau(req, res) {
    res.send(`lamento que te vayas, ${req.query.nombre}, adios...!`)
}

function controladorProbando(req, res) {
    // res.send('probando...1,2,3')
    // res.send([{ producto: 'silla' }])
    res.send({ producto: 'silla' })
}

const app = express()

app.get('/hola/:nombre/:apellido', controladorHola)
app.get('/chau', controladorChau)
app.get('/probando', controladorProbando)

const puerto = 8080
app.listen(puerto, () => { console.log('conectado!') })