const asyncHandler=require('express-async-handler')
const cateService =require('../services/category-service')
const { Success } = require('../core/success.response')
class CategoryController{
    static createNewCate=asyncHandler(async(req,res)=>{
        const data=req.body
        new Success('Created',await cateService.createNewCategory(data)).send(res)
    })
    static findAllCate=asyncHandler(async()=>{
        new Success('Success',await cateService.getAllCategory()).send(res)
    })
    static updateCate=asyncHandler(async(req,res)=>{
        let id =req.params.id
        let data=req.body
        new Success('Success',await cateService.update(data,id)).send(res)
    })
    static deleteCate=asyncHandler(async(req,res)=>{
        let id=req.params.id
        new Success('Success',await cateService.delete(id)).send(res)
    })
    static findOneCategory=asyncHandler(async(req,res)=>{
        let id=req.params.id
        new Success('Success',await cateService.findCategory(id))

    })


}   

module.exports=CategoryController