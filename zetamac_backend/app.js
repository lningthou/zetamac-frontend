const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const { WebSocket } = require('ws');
require('dotenv').config()

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// create a basic get route to display hello 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// create a post route to create a room on supabase
// payload is of the form { room_name: "Room Name", room_password: "Room Password" } 
app.post('/create_room', async (req, res) => {
    console.log("Creating room!")
    console.log(req.body)
    const { room_name, room_password } = req.body;
    const { data, error } = await supabase
        .from('rooms')
        .insert({room_name: room_name, room_password: room_password})
        .select()
    if (error) {
        console.log(error)
        res.status(500).send({error: "Error creating room"})
    }
    else {
        console.log(data)
        res.status(200).send(data)
    }
});

app.put('/add_user', async (req, res) => {
    console.log("Adding user to room!")
    console.log(req.body)
    const { id, user_id } = req.body;
    // get list of current users form users array in rooms table with given id
    const { data: users, error: user_error } = await supabase
        .from('rooms')
        .select('users')
        .eq('id', id)
    if (user_error) {
        console.log(user_error)
        return res.status(500).send({user_error: "Error adding user to room"})
    } else {
        console.log(users)
    }

    // append user_id to the list of users for room id
    updated_users = users[0]['users']
    if (updated_users == null) {
        updated_users = [user_id]
    } else {
        updated_users.push(user_id)
    }
    
    const {data, error} = await supabase
        .from('rooms')
        .update({'users': updated_users})
        .eq('id', id)
    if (error) {
        console.log(error)
        res.status(500).send({error: "Error adding user to room"})
    }
    else {
        console.log(data)
        res.status(200).send({data: "Success"})
    }
});

app.get('/get_rooms', async (req, res) => {
    const { data, error } = await supabase
        .from('rooms')
        .select()
    if (error) {
        console.log(error)
        res.status(500).send({error: "Error getting rooms"})
    }
    else {
        console.log(data)
        res.status(200).send(data)
    }
});


// Initialize WebSocket server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
        console.log('Received message:', message);
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });

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
