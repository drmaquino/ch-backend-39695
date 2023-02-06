const persona1 = {
    id: 1,
    nombre: 'marian',
    edad: 36,
    nacionalidad: 'argentina'
}

const persona2 = {
    id: 2,
    nombre: 'stefano',
    edad: 30,
    nacionalidad: 'cordoba'
}

const personas = [
    persona1,
    persona2
]

// function actualizarPersona(array, id, campo, valor) {
//     //opc1
//     const obj = array.find(p => p.id === id)
//     obj[campo] = valor

//     //opc2
//     // const index = array.findIndex(p => p.id === id)
//     // const obj = array[index]
//     // obj[campo] = valor
// }

// console.log(personas)
// actualizarPersona(personas, 1, 'nombre', 'carlitos')
// console.log(personas)

function actualizarPersona(array, id, camposYValores) {
    // //opc1
    // const obj = array.find(p => p.id === id)
    // for (const key in camposYValores) {
    //     obj[key] = camposYValores[key]
    // }

    //opc2
    const index = array.findIndex(p => p.id === id)
    array[index] = { ...array[index], ...camposYValores }
}

console.log(personas)
actualizarPersona(personas, 1, { nacionalidad: 'uruguay', edad: 37 })
console.log(personas)


