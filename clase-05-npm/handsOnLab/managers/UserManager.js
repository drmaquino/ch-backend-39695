import fs from 'fs'
import crypto from 'crypto'

export default class UserManager {

    constructor(ruta) {
        this.ruta = ruta
        this.users = []
    }

    async resetearPersistencia() {
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`error al inicializar: ${this.ruta}`)
        }
    }

    async actualizarArrayDeUsuarios() {
        try {
            const data = await fs.promises.readFile(this.ruta, 'utf-8')
            this.users = JSON.parse(data)
        } catch (error) {
            throw new Error(`error al leer: ${this.ruta}`)
        }
    }

    async guardarUsuariosEnElArchivo() {
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(this.users, null, 2))
        } catch (error) {
            throw new Error(`error al escribir: ${this.ruta}`)
        }
    }

    async getUsuarios() {
        await this.actualizarArrayDeUsuarios()
        return this.users
    }

    async crearUsuario(usuario) {
        //Un salt será un "código secreto" único para la encriptacion de la contraseña de cada usuario
        usuario.salt = crypto.randomBytes(128).toString('base64')
        usuario.contrasena = crypto.createHmac('sha256', usuario.salt).update(usuario.contrasena).digest('hex')

        await this.actualizarArrayDeUsuarios()
        this.users.push(usuario)
        await this.guardarUsuariosEnElArchivo()
        return usuario
    }

    async validarUsuario(username, contrasena) {
        await this.actualizarArrayDeUsuarios()
        const usuario = this.users.find(u => u.nombre_usuario === username)
        if (!usuario) {
            throw new Error("usuario no encontrado")
        }
        //Ya que no podemos "descifrar" la contraseña original del usuario, tenemos que hashear el intento
        //de contraseña y compararla con la contraseña que tenga guardada el usuario.
        //Nota entonces que, validar una contraseña no es descifrar la contraseña guardada, sino comparar con la contraseña ingresada
        const newHash = crypto.createHmac('sha256', usuario.salt).update(contrasena).digest('hex')

        if (newHash !== usuario.contrasena) {
            throw new Error("Error de logueo")
        }

        // si llegue hasta acá es que está todo ok, y no tengo que hacer nada más.
    }
}