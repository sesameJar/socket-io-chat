// MAKE CONNECTION

let socket = io()

// Query Dom

let message = document.getElementById("message"),
handle = document.getElementById("handle"),
btn = document.getElementById("send"),
output = document.getElementById("output"),
feedback = document.getElementById("feedback");


// EMIT EVENTS
btn.addEventListener('click', event => {
    socket.emit('chat',{
        message : message.value,
        handle : handle.value
    })
})

message.addEventListener("keydown", event => {
    socket.emit('typing', handle.value)
})

// Listen for events

socket.on("chat", data => {
    feedback.innerHTML = ""
    output.innerHTML += `<p><strong>${data.handle}</strong> ${data.message}</p>`
})

socket.on('typing', data => {
    feedback.innerHTML =`<p><em>${data} is typing ...</em></p>`
})

