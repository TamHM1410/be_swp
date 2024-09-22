const mongoose=require('mongoose')

const inventorySchema=new mongoose.Schema({
    inven_stock:{
        type:Number
    },
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:'Products',
        default:null
    },
    status:{
        type:Number
    }
},
{
    timestamps:true,
    collection:"Inventories"
})

module.exports=mongoose.model('Inventories',inventorySchema)