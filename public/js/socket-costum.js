
var socket = io();

    socket.on('connect', function() {
        console.log('conectado al servidor');
    });
    
    socket.on('disconnect', function () {
        console.log('Perdimos conexion con el servidor');
    });
    
    socket.emit('enviarMensaje', {
        usuario: 'Miguel',
        mensaje: 'Bonjour monde'
    }, function( resp ){
        console.log(resp.usuario, resp);
    });
    
    socket.on('enviarMensaje', function(mensaje){
        console.log(mensaje);
    });