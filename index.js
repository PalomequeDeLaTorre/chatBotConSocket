var express = require('express')
var socket = require('socket.io')

var app = express()
   
var server = app.listen(4000, () => {
    console.log("Listen");
})

app.use(express.static('public'))

var io = socket(server) 
io.on('connection', (socket) => {
    console.log("Conexion de socket", socket.id); 

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})