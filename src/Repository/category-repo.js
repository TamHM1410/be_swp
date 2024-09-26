const { BadRequestError } = require('../core/error.response')
const categoryModel=require('../models/category-model')
const createNewCategory=async(data)=>{
    
    return  await categoryModel.create(data)
}
const getAllCategory=async  (limit,skip,)=>{
    return await categoryModel.find().exec().lean()

}
const updateCategory=async (data,id)=>{
    const dataNew= await categoryModel.findByIdAndUpdate(id,data,{
        new:true
    })
    if(data.length ==0){
        new BadRequestError('Not found')
    }
    return dataNew
    
    
}
const deleteCategory= async(id)=>{
    return await categoryModel.findByIdAndDelete(id)
    
}
const findOneById=async (id)=>{
    return await categoryModel.findById(id)
}

module.exports={
    createNewCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
    findOneById
}