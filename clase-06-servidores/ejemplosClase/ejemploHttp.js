const http = require('http')

function controlador(request, response) {
    console.log(request)
    response.end('recibido!')
}

const server = http.createServer(controlador)

const puerto = 8080
server.listen(puerto, () => { console.log('conectado!') })