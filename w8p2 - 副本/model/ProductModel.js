
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ProductType = {
    name:String,
    description:String,
    price:Number,
    quantity:Number,
    category: String
}

const ProductModel = mongoose.model("product",new Schema(ProductType))
// 模型user 将会对应 users 集合, 
module.exports = ProductModel