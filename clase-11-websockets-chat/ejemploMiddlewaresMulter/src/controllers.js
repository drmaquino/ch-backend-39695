export function getController(req, res, next) {
    req['logger'].info('llego una peticion al get /');
    // req.io.emit('paratodos', 'blabla')
    res.send('get ok');
}

export function postController(req, res, next) {
    console.log(req.body)
    console.log(req.file)
    res.send('post ok');
}
