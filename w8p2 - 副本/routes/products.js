var express = require('express');
const ProductController = require('../controllers/ProductController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//相应前端的post请求-增加用户
router.post("/product",ProductController.addProduct)
//动态路由, 获取id -更新用户
// router.put("/product/:myid",ProductController.updateProduct)
// //删除用户
// router.delete("/product/:id",ProductController.deleteProduct)
// //获取用户列表
// router.get("/product",ProductController.getProduct)

module.exports = router;
