const asyncHandler = require("express-async-handler");
const conversation_service = require("../services/conversation-service");
const { Success } = require("../core/success.response");
class ConversationController {
  static created = asyncHandler(async (req, res) => {
    let userIdA = req.body.sender;
    let userIdB = req.body.receiver;
    new Success(
      'success',
      await conversation_service.createdConversation({ userIdA, userIdB })
    ).send(res);
  });
}

module.exports = ConversationController;
