const {
    promises: {
        readFile, // lee un archivo
        writeFile, // [sobre]escribe un archivo
        appendFile, // agrega contenido a un archivo (si no existe, lo crea)
        rm, // (remove) borra un archivo
        readdir
    }
} = require('fs')

async function leerYMostrarTimers() {
    try {
        const contenido = await readFile('./timers.js', 'utf-8')
        console.log(contenido)
    } catch (error) {
        console.log(error.message)
    }
}

leerYMostrarTimers()
console.log('me llamo marian')


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