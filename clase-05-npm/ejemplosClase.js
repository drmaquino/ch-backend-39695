
// Math.random -> [0, 1)
// 20 x 0 = 0 ->  20 x 
// 0.999999999 = 19.99999999 

// prop 1

// const cantidades = {}

// const CANT_NUMS = 10
// for (let i = 0; i < CANT_NUMS; i++) {
//     const randNum = Math.floor(Math.random() * 20 + 1)
//     if (!cantidades[randNum]) {
//         cantidades[randNum] = 0
//     }
//     cantidades[randNum]++
// }

// prop 2

// const cantidades = {
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
//     7: 0,
//     8: 0,
//     9: 0,
//     10: 0,
//     11: 0,
//     12: 0,
//     13: 0,
//     14: 0,
//     15: 0,
//     16: 0,
//     17: 0,
//     18: 0,
//     19: 0,
//     20: 0,
// }

// const CANT_NUMS = 10
// for (let i = 0; i < CANT_NUMS; i++) {
//     const randNum = Math.floor(Math.random() * 20 + 1)
//     cantidades[randNum]++
// }

// prop 3

// const cantidades = new Map()

// const CANT_NUMS = 10
// for (let i = 0; i < CANT_NUMS; i++) {
//     const randNum = Math.floor(Math.random() * 20 + 1)
//     if (!cantidades.has(randNum)) {
//         cantidades.set(randNum, 0)
//     }
//     // const cantidadPreviamenteRegistrada = cantidades.get(randNum)
//     // const cantidadIncrementada =  cantidadPreviamenteRegistrada + 1
//     // cantidades.set(randNum, cantidadIncrementada)
//     cantidades.set(randNum, cantidades.get(randNum) + 1)
// }

// console.log(cantidades)

// // prop 4

// const cantidades = []

// const CANT_NUMS = 10
// for (let i = 0; i < CANT_NUMS; i++) {
//     const randNum = Math.floor(Math.random() * 20 + 1)
//     if (!cantidades[randNum]) {
//         cantidades[randNum] = 0
//     }
//     cantidades[randNum]++
// }

// // console.log(cantidades[8])

const crypto = require('crypto')

const paraEncriptar = 'paraEncriptar';

const salt = crypto.randomBytes(128).toString('base64');
console.log(salt)

const encriptado1 = crypto.createHmac('sha256', salt).update(paraEncriptar).digest('hex');

const encriptado2 = crypto.createHmac('sha256', salt).update(paraEncriptar).digest('hex');

console.log(encriptado1)
console.log(encriptado2)



