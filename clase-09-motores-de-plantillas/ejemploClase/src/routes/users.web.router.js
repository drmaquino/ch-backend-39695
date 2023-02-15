import { Router } from 'express'

import { usersManager } from '../managers/users.manager.js'

export const usersWebRouter = Router()

// usersWebRouter.get('/', (req, res) => {
//     const users = usersManager.obtenerTodos()
//     res.send(`
// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link href='/static/css/style.css' rel='stylesheet'>
//   <title>Ejemplo</title>
// </head>

// <body>
//   <H1>Hola mundo!</H1>
//   esto es una prueba de sitio estatico
//   ${JSON.stringify(users)}
//   <button onclick="saludar()">saludar</button>
//   <script src="/static/js/users.js"></script>
// </body>

// </html>
//     `)
// })

// usersWebRouter.get('/', (req, res) => {
//     const users = usersManager.obtenerTodos()
//     res.sendFile('users.html', { root: './views' })
// })

usersWebRouter.get('/', (req, res) => {
    const users = usersManager.obtenerTodos()
    res.render('users', {
        titulo: 'Usuarios',
        hayUsuarios: users.length > 0,
        usuarios: users
    })
})
