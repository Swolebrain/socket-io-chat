var io = require('../server.js');
var messageRegistry = []


module.exports = {
  chatMessage: function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    messageRegistry.push(msg);
  },
  messageRegistry: messageRegistry
}
