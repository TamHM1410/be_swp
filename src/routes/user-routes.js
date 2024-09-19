const express = require("express");
const {paths}=require('../config/route')
const userController=require('../controllers/user-controller')
const userRouter=express.Router()

userRouter.get(paths.USER.GETALL,userController.getAllUser)

userRouter.get(paths.USER.GETBYID,userController.getUserById)

userRouter.patch(paths.USER.UPDATE,userController.updateUser)


module.exports=userRouter