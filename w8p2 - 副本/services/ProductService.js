const ProductModel = require("../model/ProductModel")
const ProductService = {
    addProduct:(name,description,price,quantity,category)=>{
        return ProductModel.create({
            name,description,price,quantity,category
          })
    },

    updateProduct:(_id,name,description,price,quantity,category)=>{
        return ProductModel.updateOne({_id},{
            name,description,price,quantity,category
          })
    },
    deleteProduct:(_id)=>{
        return ProductModel.deleteOne({
            _id:_id
          })
    },
    getProduct:(page,limit)=>{
        return ProductModel.find({},["name","price"]).sort({price:-1}).skip((page-1)*limit).limit(limit)
    }
}


module.exports = ProductService