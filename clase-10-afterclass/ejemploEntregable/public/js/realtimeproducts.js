const socket = io()

document.querySelector('#btnNuevoProd')?.addEventListener('click', ev => {
    const inputNombre = document.querySelector('#inputNombre')
    const inputPrecio = document.querySelector('#inputPrecio')

    if (inputNombre instanceof HTMLInputElement &&
        inputPrecio instanceof HTMLInputElement &&
        inputNombre.value && inputPrecio.value) {

        const prod = {
            nombre: inputNombre.value,
            precio: inputPrecio.value,
        }
        socket.emit('nuevoProducto', prod)
    }
    // como obtengo los datos del producto es frontend, no nos interesa
})

socket.on('actualizarProductos', productos => {
    const productsDiv = document.querySelector('#products')
    if (productsDiv) {
        productsDiv.innerHTML = JSON.stringify(productos, null, 2)
    }
    // como muestro los datos es frontend, no nos interesa
})

socket.emit('refrescar')