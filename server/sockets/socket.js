
const { io } = require('../server')


io.on('connection', (cliente) => {
    console.log('usuario conectado');
    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvanue á cette aplication'
    });

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    cliente.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        cliente.broadcast.emit('enviarMensaje', mensaje);
        /* if(mensaje.usuario){
            callback({
                resp: 'Todo salió bien!!'
            });
        }else{
            callback({
                resp: 'Todo salió mal!!!!'
            });
        } */
    })
});