const { BadRequestError } = require('../core/error.response')
const conversation_model=require('../models/conversation-model')


const created_new_conversation=async({userIdA,userIdB})=>{
    try{
        let isExistConversation =await  conversation_model.findOne({
            participants:{$all:[userIdA,userIdB]}
        })

        if(!isExistConversation){
            let newConversation=await conversation_model.create({
                participants:[userIdA,userIdB]
            })
            return newConversation
        }
        

    }catch(error){
        return new BadRequestError()
    }

}


module.exports={
    created_new_conversation
}