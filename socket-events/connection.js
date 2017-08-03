//this is the new connection handler
module.exports = function(socket){
  console.log('a user connected');
  socket.on('disconnect', disconnectHandler);
  socket.on('chat message', require('./messages.js').chatMessage);
  socket.emit('initial connection', require('./messages.js').messageRegistry);
};


function disconnectHandler(){
  console.log('user disconnected');
}
