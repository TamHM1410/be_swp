const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    category_name:{
        type:String
    },
    category_description:{
        type:String
    },
    status:{
        type:Number,
        default:0
    }
},{
    timestamps:true,
    collection:'Categories'
})
module.exports=mongoose.model('Categories',categorySchema)