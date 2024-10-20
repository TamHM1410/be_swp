const userSocketMap = {};
const message_service=require('../services/messages-service')
const socketController = (socket) => {
  socket.on("user_connected", (userId) => {
    userSocketMap[userId] = socket.id; // Lưu userId và socket.id vào đối tượng
    console.log(`User with ID: ${userId} is mapped to Socket ID: ${socket.id}`);

  });
  socket.on("join_conservation", (data) => {
    socket.join(data.conversationId);
    console.log(`User joined conversation: ${conversationId}`);
  });
  socket.on("send_message",async (data)=>{

    let {message,sender,conversationId}=data

    let newMess=await message_service.createdNewMessage({message,sender,conversationId})
    console.log(newMess,'new mess')
  })
};

module.exports = socketController;
