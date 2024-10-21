const userSocketMap = {};
const message_service=require('../services/messages-service')
const socketController = (socket) => {
  socket.on("user_connected", (msg) => {
    userSocketMap[msg.userId] = socket.id;
    console.log(msg)
    console.log(`User with ID: ${msg.userId} is mapped to Socket ID: ${socket.id}`);

  });
  socket.on("join_conservation", (msg) => {
    socket.join(msg.conversationId);
    console.log(`User joined conversation: ${conversationId}`);
  });
  socket.emit('client_receive',{
    data: 'Hi client toi la tam va toi yeu ban ' 
  });
  socket.on("send_message",async (msg)=>{

    let {message,sender,conversationId}=msg

    let newMess=await message_service.createdNewMessage({message,sender,conversationId})
    console.log(newMess,'new mess')
  })
};


module.exports = socketController;
