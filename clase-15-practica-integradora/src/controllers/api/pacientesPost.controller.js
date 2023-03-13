import { DatosFuturoPaciente } from '../../models/DatosFuturoPaciente.js'
import { pacientesService } from '../../services/pacientes.service.js'

export async function pacientesPostController(req, res, next) {
    try {
        const datosFuturoPaciente = new DatosFuturoPaciente(req.body)
        const pacienteRegistrado = await pacientesService.registrar(datosFuturoPaciente)
        res.status(201).json(pacienteRegistrado)
    } catch (error) {
        next(error)
    }
}
