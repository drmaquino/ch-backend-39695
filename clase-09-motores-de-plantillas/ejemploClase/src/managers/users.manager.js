class UsersManager {

    constructor() {
        this.users = [
            {
                nombre: 'pepe'
            },
            {
                nombre: 'juana'
            }
        ]
    }

    obtenerTodos() {
        return this.users
    }
}

export const usersManager = new UsersManager()