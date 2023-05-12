var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.statick('.'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

var connectedUser = {}

io.on('connection',function(socket){
    console.log('A connection is happening');

    socket.on('join',function(username){
        connectedUser[socket.id] = username;
        io.emit('user joined' + username + 'has joined the chat');
    })

    socket.on('chat message', function(message){
        var username = connectedUser[socket.id]
        io.emit('chat message',username+':'+message)
    })
})

