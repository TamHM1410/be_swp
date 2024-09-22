const express=require('express')

const {paths}=require('../config/route')

const productController=require('../controllers/products-controller')


const productRouter=express.Router()

productRouter.post(paths.PRODUCTS.POST,productController.create)





module.exports=productRouter