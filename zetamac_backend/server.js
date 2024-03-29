// Require modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const supabase = require('./supabase_client.js')

// Initialize Express app and create an HTTP server from it
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO and attach it to the HTTP server
const io = socketIo(server, {
    cors: {
        origin: true, // Allow connections from any origin
        methods: ["GET", "POST"], // Allowed HTTP methods
        credentials: true // Allow sending of cookies from the client (if needed)
    }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
});

// Routes
const roomsRoutes = require('./routes/rooms');
app.use('/rooms', roomsRoutes);

// Socket.IO connection event
io.on('connection', (socket) => {
    console.log(`WebSocket connection established with client ${socket.id}`);

    // Example event listener
    // figure out who sent the event and then send them to a room with id equaling room_id
    socket.on('create-room', async (new_data) => {
        console.log('Received data:', new_data);
        
        // insert data into supabase
        console.log("Creating room!")
        const { data, error } = await supabase
            .from('rooms')
            .insert({room_name: new_data.room_name, room_password: new_data.room_password, host_id: new_data.host_id, host_name: new_data.host_name})
            .select()
        if (error) {
            console.log(error);
            socket.emit('room-created', null);
        }
        else {
            console.log(data);
            socket.emit('room-created', data);
            socket.join(data[0].id);
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('WebSocket connection closed with client');
    });
});

// Start the HTTP server, not the Express app
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
