const asyncHandler = require("express-async-handler");
const { created_new_conversation } = require("../Repository/conversation-repo");
class ConversationService {
  static createdConversation = asyncHandler(async ({ userIdA, userIdB }) => {
    return await created_new_conversation({ userIdA, userIdB });
  });
}

module.exports = ConversationService;
