import express from 'express'
import mongoose from 'mongoose'

// formato: mongodb://usuario:contrasenia@host:port/db'
const strCnx = 'mongodb://localhost/coderhouse'
await mongoose.connect(strCnx)

const prodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    codProd: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true }
}, { versionKey: false })

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { versionKey: false })

// data access object - DAO
const productosDb = mongoose.model('productos', prodSchema)
const usuariosDb = mongoose.model('usuarios', userSchema)

// productosDb.create({
//     name: 'marian',
//     codProd: 'abc123',
//     desc: 'un producto',
//     price: 1000
// })

class MongoDbManager {
    #db
    constructor(db) {
        this.#db = db
    }

    async guardar(cosa) {
        return await this.#db.create(cosa)
    }

    async obtenerSegunId(id) {
        return await this.#db.findOne({ _id: id })
    }
}

const productosManager = new MongoDbManager(productosDb)
const usuariosManager = new MongoDbManager(usuariosDb)

// await productosManager.guardar({
//     nombre: 'casa',
//     precio: 1000
// })

// await productosManager.guardar({
//     name: 'marian',
//     codProd: 'abc123',
//     desc: 'un producto',
//     price: 1000
// })

// await usuariosManager.guardar({
//     username: 'marian',
//     codProd: 'abc123',
//     desc: 'un producto',
//     price: 1000
// })

console.log(await productosManager.obtenerSegunId('640b39d81300cd8e3adcdecb'))

mongoose.connection.close()