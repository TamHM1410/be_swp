const { client, psqlConnection } = require("../config/psqlconnection");
const asyncHandler = require("express-async-handler");

class PsqlService {
  static getMsgByUserId = asyncHandler(
    asyncHandler(async (user_id) => {
      psqlConnection();

      let sender_id = user_id;

      let result = await client.query(
        `SELECT messages.receiver_id, messages.sender_id, 
                    MAX(messages.message) AS message, 
                    users.username, 
                    users.url_avatar 
             FROM messages 
             JOIN users ON messages.receiver_id = users.id 
             WHERE receiver_id = $1 
             GROUP BY messages.receiver_id, messages.sender_id, users.username, users.url_avatar`,
        [sender_id]
      );

      return result.rows;
    })
  );
  static getDetailMsg = asyncHandler(async (sender_id, receiver_id) => {
    psqlConnection();

    let result = await client.query(
      `SELECT m.id, m.message ,u.url_avatar ,u.username,u.id FROM messages m  
            JOIN users u ON (m.receiver_id = u.id OR m.sender_id = u.id) WHERE (m.sender_id = $1 AND m.receiver_id = $2) 
            OR (m.sender_id = $2 AND m.receiver_id = $1)
       ORDER BY m.created_at ASC `,
      [sender_id, receiver_id]
    );

    return result.rows;
  });
  static createMsg = asyncHandler(
    async (sender_id, receiver_id, message, message_type) => {
      psqlConnection();
      console.log(req.body, "log");

      let result = await client.query(
        `INSERT INTO messages (sender_id,receiver_id,message,message_type)
VALUES ($1,$2,$3,$4,$5) RETURNING`,
        [sender_id, receiver_id, message, message_type]
      );

      return result.rows;
    }
  );
}

module.exports = PsqlService;
