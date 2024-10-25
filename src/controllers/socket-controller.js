const userSocketMap = {};
const message_service = require("../services/messages-service");
const { client, psqlConnection } = require("../config/psqlconnection");

const create_msg = async (msg) => {
  psqlConnection(); 
  let { sender_id, receiver_id, message, message_type } = msg;

  let result = await client.query(
    `INSERT INTO messages (sender_id, receiver_id, message, message_type)
     VALUES ($1, $2, $3, $4) RETURNING *`, 
    [sender_id, receiver_id, message, message_type]
  );

  return result.rows[0]; 
};

const socketController = (socket, io) => {
  socket.on("user_connected", (userId) => {
    userSocketMap[userId] = socket.id;
    console.log(`User with ID: ${userId} is mapped to Socket ID: ${socket.id}`);
  });

  socket.on("user_typing", (msg) => {
    console.log(msg);
    socket.emit("liten", msg); 
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
