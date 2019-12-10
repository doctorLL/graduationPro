var express = require('express');
var router = express.Router();
const services = require('../services/userServices')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/list,', service.userList); //获取用户列表
router.post('/login', service.login);//用户数据校验接口
router.post('findByKeyWord',service.findByKeyWord);//模糊查询
router.post('userAdd', service.userAdd);//添加用户
router.post('userUpdate', service.userUpdate);//更新用户信息
router.get('findUserById', service.findUserById);//根据ID查询用户
router.get('deleteUserById', serviece.deleteUserById);//根据ID删除用户
router.post('deleteByBatch', serviece.deleteByBatch);//批量删除用户

module.exports = router;

