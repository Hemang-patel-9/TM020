const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: { origin: '*' }
});

const port = 3000;

const users = {};

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message, name) => {
        console.log(message, name);
        socket.broadcast.emit('message', `${name}: ${message}`);
    });

    // socket.on('send', (message) => {
    //     socket.brodcast.emit('receive', (message: message, name))
    // })

    socket.on('disconnect', () => {
        console.log('a user disconnected!');
    });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));