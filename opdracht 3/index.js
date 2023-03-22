const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/rooms', (req, res) => {
  res.sendFile(__dirname + '/pages/rooms.html');
});

app.get('/chatroom', (req, res) => {
  res.sendFile(__dirname + '/pages/chatroom.html');
});

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/pages/users.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

server.listen(3000, () => {
  console.log('Port *:3000');
});