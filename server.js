var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('static'));

io.on('connection', require('./socket-events/connection.js')); //CommonJS import syntax

http.listen(3003, function(){
  console.log('listening on localhost:3003');
});

module.exports = io;
