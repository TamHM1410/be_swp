const { Success } = require('../core/success.response')
const product_service=require('../services/products-service')
const asyncHandler=require('express-async-handler')
class ProductController{
    static create=asyncHandler(async(req,res)=>{
        let type=req.body.type
        let payload=req.body
        new Success(undefined,await product_service.create_new_product(type,payload)).send(res)
    })

}

module.exports=ProductController