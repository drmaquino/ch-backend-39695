import mongoose from 'mongoose'

export class ManagerMongoose {
    constructor(nombreColeccion, schema) {
        this.coleccion = mongoose.model(nombreColeccion, new mongoose.Schema(schema, { versionKey: false }))
    }
    async guardar(registro) {
        return await this.coleccion.create(registro)
    }
    async obtenerTodos() {
        return await this.coleccion.find({}).lean()
    }
}
