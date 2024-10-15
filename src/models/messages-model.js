const mongoose =require('mongoose')

var messagesShema=new mongoose.Shema({
    conversationId:{
        type:mongoose.Types.ObjectId,
        require:true
    },
    sender:{
        type:mongoose.Types.ObjectId,
        ref:'Users',
        require:true

    },
    message:{
        type:String,
        require:true
    },
    isRead:{
        type:Boolean,
        require:true,
        default:false
    }

})

const Message = mongoose.model('Messages', messagesShema);


module.exports=Message