const ProductService = require("../services/ProductService")


const ProductController = {
    addProduct:async (req,res)=>{
        console.log(req.body)
        //插入数据库
        // 1. 创建一个模型(user,限制filed类型), 一一对应数据库的集合(users)
        // user.create user.find user.delete user.update
        const {name,description,price,quantity,category} = req.body

        await ProductService.addProduct(name,description,price,quantity,category)
        res.send({
            ok:1
          })
      },

      updateProduct:async (req,res)=>{
        console.log(req.body,req.params.myid)
        const {name,description,price,quantity,category} = req.body
        await ProductService.updateProduct(req.params.myid,name,description,price,quantity,category)
        res.send({
            ok:1
          })
        
      },
      deleteProduct:async (req,res)=>{

        await ProductService.deleteProduct(req.params.id)

        res.send({
            ok:1
          })
      },
      getProductr:async (req,res)=>{
        console.log(req.query)
        const {page,limit} = req.query
        const data = await ProductService.getProduct(page,limit)

        res.send(data)
      }
}

module.exports = ProductController