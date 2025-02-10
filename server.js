// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*', // Allow all origins for demo purposes
        methods: ['GET', 'POST']
    }
});

// Store messages in memory
let messages = [];

// Middleware
app.use(cors());
app.use(express.static('public'));  // To serve static files

// Setup Socket.IO
io.on('connection', (socket) => {
    console.log('A user connected');

    // Send stored messages to new user
    socket.emit('loadMessages', messages);

    // Handle new messages
    socket.on('sendMessage', (msg) => {
        messages.push(msg);
        io.emit('receiveMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
