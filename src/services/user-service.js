const {getAllUser,updateUserById,findUserById}=require('../repository/user-repo')
const asyncHandler=require('express-async-handler')
class UserService{
    static findAllUser =asyncHandler(async(limit, skip, sort)=>{
        return await getAllUser(limit,skip,sort)

    })
    static getUserById =asyncHandler(async(id)=>{
        return await findUserById(id)
    })
    
    static updateUser =asyncHandler(async (id,data)=>{
        return await updateUserById(id,data)

    })


}

module.exports=UserService