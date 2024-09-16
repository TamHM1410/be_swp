require("dotenv").config();


const app = require("./src/app");



const PORT = process.env.PORT;



const httpServer = require('http').createServer(app)
////socket
const io = require('socket.io')(httpServer, {
  cors: {
   origin: "*",
   method:['GET','POST']
},
});
io.on("connection", (socket) => {
  console.log("New client connected",socket.id);
  
  socket.on("keyboard_message_send", (data) => {
     console.log('data',data)

  });
  socket.on('message',(data)=>{
    console.log(data)
  })


  socket.emit('emit','this is for client')
  socket.on('disconnect', () => {
    console.log("Client disconnected", socket.id);
});


});



httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});