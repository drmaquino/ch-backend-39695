export class MongooseManager {
    #db
    constructor(db) {
        this.#db = db
    }

    async guardarCosa(cosa) {
        await this.#db.create(cosa)
        return cosa
    }

    async buscarCosas() {
        return await this.#db.find()
    }

    async buscarCosaSegunId(id) {
        return await this.#db.findOne({ id })
    }

    async reemplazarCosa(id, nuevaCosa) {
        // sorpresa! si no agregamos esa opcion al final, no se ejecuta la validacion al actualizar..
        return await this.#db.replaceOne({ id }, nuevaCosa, { runValidators: true })
    }

    async borrarCosaSegunId(id) {
        return await this.#db.deleteOne({ id })
    }

    async reset() {
        return await this.#db.deleteMany({})
    }
}