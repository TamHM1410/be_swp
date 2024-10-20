const express = require("express");
const {paths}=require('../config/route')
const conversationController=require('../controllers/conversation-controller')


const conversationRouter=express.Router()

conversationRouter.post(paths.CONVERSATION.POST,conversationController.created)


module.exports=conversationRouter