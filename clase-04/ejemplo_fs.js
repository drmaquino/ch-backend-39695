const {
    readFileSync, // lee un archivo
    writeFileSync, // [sobre]escribe un archivo
    appendFileSync, // agrega contenido a un archivo (si no existe, lo crea)
    rmSync, // (remove) borra un archivo
    readdirSync
} = require('fs')


// try {
//     const contenido = readFileSync('./timers.js', 'utf-8')
//     console.log(contenido)
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     writeFileSync('./cosasNuevas.js', `
//     module.exports = function saludar() { console.log('holiiiii!') }`)

//     const saludar = require('./cosasNuevas.js')

//     saludar()
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     writeFileSync('./cosasNuevas.js', 'chauuuuuuuuuuuuuuu')
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     appendFileSync('./cosasNuevas.js', '!!!!!')
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     rmSync('./cosasNuevas.js')
// } catch (error) {
//     console.log(error.message)
// }

// try {
//     console.log(readdirSync('./'))
// } catch (error) {
//     console.log(error.message)
// }