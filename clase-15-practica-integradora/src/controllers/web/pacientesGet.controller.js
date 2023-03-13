import { pacientesService } from '../../services/pacientes.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'

export async function pacientesGetController(req, res, next) {
    try {
        const pacientes = await pacientesService.listar()
        console.log(pacientes)
        res.render('pacientes.handlebars', { pacientes, hayPacientes: pacientes.length > 0, titulo: 'Pacientes' })
    } catch (error) {
        res.send('error:' + JSON.stringify(error))
    }
}
