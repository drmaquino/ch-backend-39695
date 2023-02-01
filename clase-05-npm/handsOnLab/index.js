import UserManager from "./managers/UserManager.js"

async function main() {
    const userManager = new UserManager('./databases/usuarios.json')
    await userManager.resetearPersistencia()

    const users = await userManager.getUsuarios()
    console.log(users) // []

    const user = {
        nombre: 'Marisol',
        apellido: 'Cadena',
        nombre_usuario: 'MomoRompe',
        contrasena: '123'
    }
    await userManager.crearUsuario(user)

    const segundaConsultaUsers = await userManager.getUsuarios()
    console.log(segundaConsultaUsers) // Revisar contraseña hasheada.

    await userManager.validarUsuario('MomoRompe', '123')
    console.log('login exitoso!')

    try {
        await userManager.validarUsuario('MomoRompe', '1234')
    } catch (error) {
        console.log(error.message)
    }
}

main()