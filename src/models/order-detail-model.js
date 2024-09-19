const mongoose =require('mongoose')
var orderDetailSchema =new mongoose.Schema({
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:''
    },
    payment_id:{
        type:mongoose.Types.ObjectId,
        ref:'Payment'
    },
    status:{type:Number}
},{
    timestamps:true,
    collection:'OrderDetails'
})

module.exports=mongoose.model('OrderDetails',orderDetailSchema)