socket = io("http://localhost3000")
socket.on('connect', () => {
    console.log('Connected to server')
})

export default socket;