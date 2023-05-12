var socket = io();

var chatDiv = document.getElementById('chat');
var usernameInput = document.getElementById('username');
var messageInpput = document.getElementById('message');
var sendButton = document.getElementById('send');

// ========== EVENT LISTENERS ============
// BUTTONI SEND

sendButton.addEventListener('click',function(){
    var message = messageInput.value;
    socket.emit('chat message', message);
    messageInput.value = '';
})

// USERNAME

usernameInput.addEventListener('change',function(){
    var username = usernameInput.value;
    socket.emit('join',username);
    usernameInput.value = '';
})

// ========== on connection of sockets => events happening

socket.on('chat message',function(message){
    var p = document.createElement('p');
    p.innerText = message;
    chatDiv.appentChild(p);
})

socket.on('user joined', function(usernames){
    var p = document.createElement('p');
    p.innerText = username;
    chatDiv.appendChild(p);
})


