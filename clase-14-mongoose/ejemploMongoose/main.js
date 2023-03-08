import mongoose from 'mongoose';
import { MONGODB_CNX_STR } from './config.js';
import { personasManager } from './managers/personasManager.js';

await mongoose.connect(MONGODB_CNX_STR)

await personasManager.reset()

const guardado = await personasManager.guardarCosa({
    nombre: 'marian',
    edad: 37,
    colFav: ['verde'] // funciona ok!
    // colFav: [56] // tira error! no es un string!
    // colFav: [] // tira error! esta vacío!
    // ... // si no incluyo el array, tira error tb!
})

console.log(await personasManager.buscarCosas())

console.log(await personasManager.buscarCosaSegunId(guardado._id))

// console.log(await personasManager.reemplazarCosa(guardado._id, {
//     //... si no incluyo el campo nombre, falla, pq es un campo requerido!
//     edad: 37,
//     colFav: ['amarillo']
// }))

console.log(await personasManager.reemplazarCosa(guardado._id, {
    nombre: 'marian',
    edad: 37,
    colFav: ['amarillo']
}))

console.log(await personasManager.buscarCosaSegunId(guardado._id))

console.log(await personasManager.borrarCosaSegunId(guardado._id))

console.log(await personasManager.buscarCosaSegunId(guardado._id))