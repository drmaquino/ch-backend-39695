import { ManagerMongoose } from './ManagerMongoose.js'

export const pacientesManager = new ManagerMongoose('pacientes', {
    dni: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
})