var socket = io();
// IO es para escuchar
socket.on('connect', function () {
    console.log('Conectado con el Servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Emit es para enviar información, SOLO AL SERVIDOR
socket.emit('enviarMensaje', {
    usuario: 'Giovanni',
    mensaje: 'Hola Mundo'
},function(resp){
console.log('respuesta server: ', resp);
});

// Escuchar al servidor
socket.on('enviarMensaje', function(mensaje){
    
    console.log('Servidor: ', mensaje);

});