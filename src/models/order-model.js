const mongoose=require('mongoose')

var orderSchema=new mongoose.Schema({
    customer_id:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    order_date:{ type:String},
    ship_address:{type:String},
    order_description:{type:String},
    order_detail_id:{
        type:mongoose.Types.ObjectId,
        ref:'OrderDetails',

    }

},{
    timestamps:true,
    collection:'Orders'
})

module.exports=mongoose.model('Orders',orderSchema)