let express = require("express")
let socket = require("socket.io")

let app = express()

let server = app.listen(4000, () => {
    console.log(`Listening to port 4000`)
})

// Static files

app.use(express.static("public"))


// Socket setup

let io = socket(server)

io.on("connection", socket => {
    console.log("MADE SOCKET CONNECTION", socket.id)

    //Handle Chat event
    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })

    // Typing Event
    socket.on('typing',data => {
        socket.broadcast.emit('typing', data)
    })
})


