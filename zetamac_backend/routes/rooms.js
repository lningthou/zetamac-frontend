
const express = require('express');
const router = express.Router();
const supabase = require('../supabase_client.js')

// GET request to retreive rooms
router.get('/', async (req, res) => {
    console.log("Getting rooms!")
    const { data, error } = await supabase
        .from('rooms')
        .select()
    if (error) {
        console.log("Error getting rooms")
        console.log(error)
        res.status(500).send({error: "Error getting rooms"})
    }
    else {
        console.log("Got rooms!")
        console.log(data)
        res.status(200).send(data)
    }
});

// POST request to create a room 
router.post('/', async (req, res) => {
    console.log("Creating room!")
    console.log(req.body)
    const { room_name, room_password, user_id, username } = req.body;
    const { data, error } = await supabase
        .from('rooms')
        .insert({room_name: room_name, room_password: room_password, host_id: user_id, host_name: username})
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

// PUT request to add a user to a room
router.put('/', async (req, res) => {
    console.log("Adding user to room!")
    console.log(req.body)
    const { id, user_id, username } = req.body;
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
        updated_users = [(user_id, username)]
    } else {
        updated_users.push((user_id, username))
    }

    // Update array with new user
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

module.exports = router;
