let userSQL = require('../db/Usersql');
const express=require("express");
const mysql=require("mysql");
const DBConfig = require('../db/DBConfig')
var router = express.Router();

/* GET users listing. */
let pool = mysql.createPool(DBConfig.mysql);
var responseJSON = function(res,rep) {
  if(typeof rep === 'undefined'){
      res.json({
          code: '200',
          msg: '操作失败'
      })
  }else {
      res.json(ret);
  }
};

router.get('/res', function(req, res, next) {
  res.send('respond with a resource');
 /*  pool.getConnection(function (err, connection) {
    var param = req.query;
    var userName = param.name;
    var password = param.password;
    var _res = res;
    connection.query(userSQL.queryAll, function( err, res){
      var isTure = false;
      if(res) {
        for(let item of res){
          if(item[name] === userSQL && item[password] == password){
            isTure = true;
          }
        }
      }
      var data = {};
      if(isTrue){
          data.result = {
            code : 1,
            message:'用户已存在'
          };
      }else{
        connection.query(userSQL.insert, [param.name, param.password], function(err, res) {
          if(res) {
            data.result = {
              code: 200,
              message:'注册成功'
            };
          }else{
            data.result = {
              code: -1,
              message:'注册失败'
            };
          }
          if(err) data.err = err;
          // 以json形式，把操作结果返回给前台页面
          setTimeout(function () {
              responseJSON(_res, data)
          },300);
          // responseJSON(_res, data);
          // 释放链接
          connection.release();

        })
      }
    }) 
  }) */
});

module.exports = router;
