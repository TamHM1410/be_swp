const { Success } = require("../core/success.response");
const userService = require("../services/user-service");
const asyncHandler = require("express-async-handler");
class UserController {
  static getAllUser = asyncHandler(async (req, res) => {
    let skip = req.query.page - 1 || 0;
    let limit = req.query.limit || 50;
    let sort = (req.query.sort === "asc") | "ASC" ? 1 : -1;
    new Success(
      "Success",
      await userService.findAllUser(limit, skip, sort)
    ).send(res);
  });

  static getUserById = asyncHandler(async (req, res) => {
    let id = req.params.id;
    new Success('Success',
        await userService.getUserById(id)
    ).send(res)
  });

  static updateUser =asyncHandler(async (req,res)=>{
    let data=req.body
    let id =req.params.id
    new Success('Success',await userService.updateUser(id,data)).send(res)
  })
}
module.exports = UserController;
