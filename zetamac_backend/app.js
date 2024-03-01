const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const roomsRoutes = require('./routes/rooms');
//const usersRoutes = require('./routes/users');

app.use('/rooms', roomsRoutes);

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    console.log('WebSocket connection established with client');
    console.log(ws.id);

    // ws.on('message', (message) => {
    //     console.log('Received message:', message);
    // });

    // ws.on('close', () => {
    //     console.log('WebSocket connection closed');
    // });

    // You can also send messages to the client
    ws.send('Hello from WebSocket server');
});

// Attach WebSocket server to the HTTP server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});
