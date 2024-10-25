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

  socket.on("join_conversation", (msg) => {
    socket.join(msg.user_id);
    console.log(`User joined conversation: ${msg.user_id}`);
  });

  socket.on("send_message", async (msg) => {
    console.log(msg.receiver_id);
    
    let rs = await create_msg(msg);
    console.log("Inserted message:", rs);
    socket.emit("received_msg", {
      message: rs.message,
      sender_id: rs.sender_id,
      receiver_id: rs.receiver_id,
    });
    io.to(msg.receiver_id).emit("received_msg", {
      message: rs.message,
      sender_id: rs.sender_id,
      receiver_id: rs.receiver_id,
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
};

module.exports = socketController;
