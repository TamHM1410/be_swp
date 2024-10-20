const userSocketMap = {};
const message_service=require('../services/messages-service')
const socketController = (socket,io) => {
//   console.log('connected',(msg    )=>{
//     io.emit('chat message', msg);
//   })

  socket.on("user_connected", (userId) => {
    userSocketMap[userId] = socket.id; 
    console.log(`User with ID: ${userId} is mapped to Socket ID: ${socket.id}`);

  });
  socket.on("user_typing", (msg) => {
    console.log(msg)
    socket.emit('liten',msg)

  });
  socket.on("join_conservation", (data) => {
    socket.join(data.conversationId);
    console.log(`User joined conversation: ${conversationId}`);
  });
  
  socket.on("send_message",async (data)=>{

    let {message,sender,conversationId}=data

    let newMess=await message_service.createdNewMessage({message,sender,conversationId})
    io.to(conversationId).emit('new_message', newMess);  
})

  socket.on('disconnect', () => {
    console.log('user disconnected');
});
};

module.exports = socketController;
