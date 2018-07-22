var express = require('express');
var router = express.Router();
var dbutil = require('../tools/dbUtil')
var $sql = require('../dao/userMapper')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//获取所有用户
router.get('/get_all',function (req,res,next) {
    dbutil($sql.selectAll,res,null,null)
})

//通过id获取指定用户信息
router.get('/get_user',function (req,res,next) {
    var id = req.query.id || req.params.id
    dbutil($sql.selectById,res,id,null)
})

//通过id删除指定用户信息
router.get('/delete_user',function (req,res,next) {
    var id = req.query.id || req.params.id
    dbutil($sql.deleteById,res,id,null)
})

//添加新用户
router.get('/add_user',function (req,res,next) {
    var name = req.query.name || req.params.name
    var sex = req.query.sex || req.params.sex
    var age = req.query.age || req.params.age
    var data = [name,sex,age]
    dbutil($sql.insertUser,res,data,null)

})

//通过id修改用户信息
router.get('/update_user',function (req,res,next) {
    var name = req.query.name || req.params.name
    var sex = req.query.sex || req.params.sex
    var age = req.query.age || req.params.age
    var id = req.query.id || req.params.id
    var data = [name,sex,age,id]
    dbutil($sql.updateUserById,res,data,null)

})

module.exports = router;
