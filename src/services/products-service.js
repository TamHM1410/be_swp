const asyncHandler=require('express-async-handler')
const {
    createNewProduct,
    createMainBoard
}=require('../Repository/product-repo')
const { BadRequestError } = require('../core/error.response')
class ProductService{
    static create_new_product=asyncHandler(async(type,payload)=>{
        switch(type){
            case 'Mainboard': return new Mainboards(payload).createMainboard()
                        

        }
    })

}



class Products{
    constructor({
        product_name,
        product_description,
        product_slug,
        pruduct_stock,
        product_status,
        product_category,
        product_sub_category,
        product_technical_specification,
        product_rating,
        product_comment,
        pruduct_warranty,
        product_manufacter




    }){
        this.product_name=product_name
        this.product_description=product_description
        this.product_slug=product_slug
        this.product_stock=pruduct_stock
        this.product_status=product_status
        this.product_category=product_category
        this.product_sub_category=product_sub_category
        this.product_technical_specification=product_technical_specification
        this.pruduct_warranty=pruduct_warranty
        this.product_manufacter=product_manufacter
        this.product_rating=product_rating
        this.product_comment=product_comment




    }
    create_product=asyncHandler(async()=>{
        return await createNewProduct(this)

    })

}

class Mainboards extends Products{
    createMainboard=asyncHandler(async()=>{
        let newMain=await createMainBoard(this.product_technical_specification)
        if(!newMain) throw new BadRequestError('error',406)
        return await this.create_product()

    })

}
module.exports=ProductService