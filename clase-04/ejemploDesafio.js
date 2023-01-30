const fs = require('fs')

async function main() {

    const cosas = []

    cosas.push({ cosa: 'maravillosa' })

    const comoJson = JSON.stringify(cosas)

    fs.promises.writeFile('cosas.json', comoJson)


    const cosasLeidas = JSON.parse(await fs.promises.readFile('cosas.json', 'utf-8'))

    console.log(cosasLeidas)

}

main()

class Lector {
    constructor(ruta) {
        this.ruta = ruta
    }

    async mostrar() {
        const comoJson = await fs.promises.readFile(this.ruta, 'utf-8')
        console.log(JSON.parse(comoJson))
    }
}

const lector = new Lector('./cosas.json')

lector.mostrar()