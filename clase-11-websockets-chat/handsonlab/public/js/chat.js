const socket = io()

/** @type {HTMLInputElement | null} */
const inputMensaje = document.querySelector('#inputMensaje')

/** @type {HTMLInputElement | null} */
const inputAlias = document.querySelector('#inputAlias')

inputAlias?.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (inputAlias.value.trim().length > 0) {
            socket.emit('nuevoMensaje', { alias: inputAlias.value, mensaje: inputMensaje?.value });
            inputAlias.value = "";
        }
    }
})

Swal.fire({
    title: "Identifícate",
    input: "text",
    inputValidator: (value) => {
        return !value && "¡Necesitas escribir un nombre de usuario para comenzar a chatear!"
    },
    allowOutsideClick: false
}).then(result => {
    inputAlias.value = result.value;
    socket.emit('nuevoUsuario', result.value)
})

document.querySelector('#btnNuevoMsg')?.addEventListener('click', ev => {

    if (inputAlias instanceof HTMLInputElement &&
        inputMensaje instanceof HTMLInputElement &&
        inputAlias.value && inputMensaje.value) {

        const msg = {
            alias: inputAlias.value,
            mensaje: inputMensaje.value,
        }
        socket.emit('nuevoMensaje', msg)
    }
})

const messagesTemplate = `
{{#if hayMensajes}}
<ul>
    {{#each mensajes}}
    <li>{{this.alias}}: {{this.mensaje}}</li>
    {{/each}}
</ul>
{{else}}
no hay mensajes
{{/if}}`

const makeMensajesHtml = Handlebars.compile(messagesTemplate)

socket.on('mensajes', mensajes => {
    const messagesDiv = document.querySelector('#messages')
    if (messagesDiv) {
        messagesDiv.innerHTML = makeMensajesHtml({
            hayMensajes: mensajes.length > 0,
            mensajes
        })
    }
})

socket.on('nuevoUsuario', alias => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        title: `${alias} se ha unido al chat`,
        icon: "success"
    })
})

socket.emit('refrescarMensajes')
