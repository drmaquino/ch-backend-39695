import express from 'express'
const PORT = 8080

const app = express()
app.use(express.json())

const fraseInicial = ['Frase', 'inicial']

app.get('/api/frase', (req, res) => {
    res.json({
        frase: fraseInicial.join(' ')
    })
})

app.get('/api/palabras/:pos', (req, res) => {
    const indicePalabra = parseInt(req.params.pos) - 1
    res.json({
        buscada: fraseInicial[indicePalabra]
    })
})

app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra
    fraseInicial.push(palabra)
    res.json({
        agregada: palabra,
        pos: fraseInicial.length
    })
})

app.put('/api/palabras/:pos', (req, res) => {
    const indicePalabra = parseInt(req.params.pos) - 1
    const palabra = req.body.palabra
    const anterior = fraseInicial[indicePalabra]
    fraseInicial[indicePalabra] = palabra
    res.json({
        actualizada: palabra,
        anterior: anterior
    })
})

app.delete('/api/palabras/:pos', (req, res) => {
    const indicePalabra = parseInt(req.params.pos) - 1
    const [borrada] = fraseInicial.splice(indicePalabra, 1)
    res.json({
        borrada
    })
})

app.listen(PORT, () => { console.log('escuchando en puerto 8080!') })