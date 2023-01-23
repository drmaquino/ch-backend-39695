// fetch('https://jsonplaceholder.typicode.com/users/1/')
//     .then(response => response.json())
//     .then(json => { console.log(json) })
//     .catch(err => { console.log(err) })


// async function main() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1/')
//         const objeto = await response.json()
//         console.log(objeto)
//     } catch (error) {
//         console.log(error)
//     }
// }

// main()
// console.log('terminé')

// response => response.json()

// const bla = function(response) { 
//     console.log('chau')
//     return response.json() 
// }

// // function Persona(nombre){
// //     this.nombre = nombre
// // }

// // var persona = new Persona('marian')

// class Persona {
//     constructor(nombre) {
//         this.nombre = nombre
//     }
// }

// const persona = new Persona('marian')

//----------------------------------------------------------
// ES8

// const o = {
//     edad: 85,
//     nombre: 'marian',
//     esProfe: true,
// }

// // entries (definiciones)
// // const entry1 = [ 'nombre', 'marian' ]
// // const entry2 = [ 'edad', 85 ]
// // const entries = [ [ 'nombre', 'marian' ], [ 'edad', 85 ] ]
// const entries = Object.entries(o)
// console.log(entries)

// console.log(Object.keys(o))

// console.log(Object.values(o))

//-----------------------------------------
// nullish coalescence

// const edad = document.getElementById('txtEdad').value ?? 1

// const o = {
//     result: 'ok',
//     descripcion: {
//         titulo: 'bla',
//         detalle: 'ble',
//     }
// }

// if (o.descripcion.titulo === 'bla') console.log('blu')

function saleMal() {
    throw new Error('salio mal')
}



try {
    saleMal()
    console.log('fin')
} catch (error) {
    console.log('error!')
    console.log(error.message)
    throw new Error('sigue todo mal')
} finally {
    console.log('fin')
}

// .then()
// .catch()
// .finally()
