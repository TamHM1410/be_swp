const inventoryModel=require('../models/inventory-model')
const createInventory=async (data)=>{
    return await inventoryModel.create(data)


}


module.exports={
    createInventory
}