// function ejecutar(parametro) {
//     return 'resultado'
// }


// function ejecutar(parametro) {
//     // const parametro /* tipo de dato? */ = 'argumento' // acá sería string
//     // const parametro /* tipo de dato? */ = 45 // acá sería un number
//     // const parametro /* tipo de dato? */ = () => { /* ... */ } // acá sería una function
//     return 'resultado'
// }


// function ejecutar(parametro: string) { // aca el parametro se le llama parametro
//     parametro.charAt(0)
//     return 'resultado'
// }
// ejecutar('argumento')

// function ejecutar(parametro: number) { // aca el parametro se le llama parametro
//     parametro.toFixed()
//     return 'resultado'
// }
// ejecutar(45)

// function ejecutar(parametro /*: function*/) { // aca el parametro se le llama callback
//     // parametro = function () { console.log('hola') }
//     parametro()
//     return 'resultado'
// }

// function saludar() {
//     console.log('hola')
// }

// //es lo mismo
// const saludarFn = function () { console.log('hola') }
// const saludarArrow = () => { console.log('hola') }
// // es lo mismo

// ejecutar(saludar)
// ejecutar(function () { console.log('hola') })
// ejecutar(saludarFn)

// ejecutar(() => {
//     console.log('hola')
// })

// ejecutar(saludarArrow)

//IIFE
// NO USAR !!!
(function () {
    console.log('saludos!!')
})()
