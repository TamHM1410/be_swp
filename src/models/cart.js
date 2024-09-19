const mongoose = require("mongoose"); // Erase if already required

var cartSchema=new mongoose.Schema({
    cart_state:{
        type:String,
        enum:['empty','pending'],
        default:'empty'
    },
    cart_product:{
        type :Array,
        default:[]
    },
    cart_count_product:{
        type:Number,
        default:0
    },

},{
    timestamps:true
})

module.exports= mongoose.model('Carts',cartSchema)