const express=require("express");
const mysql=require("mysql");
const DBConfig = require('../db/DBConfig')
const userSQL = require('../db/Usersql');
const router = express.Router();


//使用DBConfig.js的配置信息创建一个mysql链接池
let pool = mysql.createPool(DBConfig.mysql);

//响应一个JSON数据
var responseJSON = function(res,ret) {
    if(typeof ret === 'undefined'){
        res.json({
            code: '200',
            msg: '操作失败'
        })
    }else {
        res.json(ret);
    }
};

// 用户注册
 router.get('/reg',function (req, res, next) {
    //res.send('respond with a resource');
    // 从连接池获取连接
     pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query
        var UserName = param.name;
        var Password = param.password;
        var _res = res; 
        connection.query(userSQL.queryAll, function (err, res) {
           /*  console.log(res);
            console.log('获取数据成功'); */
             var isTrue = false;
            if(res){ //获取用户列表，循环遍历判断当前用户是否存在
                for (let item of res) {
                    if(item.name == UserName && item.PASSWORD == Password) {
                        isTrue = true;
                    }
                }
            }
            var data = {};
            data.isreg = !isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            if(isTrue) {
                data.result = {
                    code: 1,
                    msg: '用户已存在'
                };//登录成功返回用户信息
            } else {
                connection.query(userSQL.insert, [param.name,param.password], function (err, result) {
                    if(result) {
                        data.result = {
                            code: 200,
                            msg: '注册成功'
                        };
                    } else {
                        data.result = {
                            code: -1,
                            msg: '注册失败'
                        };
                    }
                });
            }

            if(err) data.err = err;
            // 以json形式，把操作结果返回给前台页面
            setTimeout(function () {
                responseJSON(_res, data)
            },300);
             //responseJSON(_res, data); 
            // 释放链接
            connection.release();

       });
    }); 
});
/* / 用户登录
router.get('/login',function (req, res, next) {
    console.log(req)
    // 从连接池获取连接
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        var UserName = param.name;
        var Password = param.password;
        var _res = res;
        global.console.log(param);
        connection.query(userSQL.queryAll, function (err, res, result) {
            var isTrue = false;
            if(res){ //获取用户列表，循环遍历判断当前用户是否存在
                for (var i=0;i<res.length;i++) {
                    if(res[i].name == UserName && res[i].PASSWORD == Password) {
                        isTrue = true;
                    }
                }
            }
            var data = {};
            data.isLogin = isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            if(isTrue) {
                data.userInfo = {};
                data.userInfo.name = UserName;
                data.userInfo.password = Password;
            } //登录成功返回用户信息
            if(result) {
                result = {
                    code: 200,
                    msg: 'succeed'
                };
                data.result = result;
            }
            if(err) data.err = err;
            // 以json形式，把操作结果返回给前台页面
            responseJSON(_res, data);

            // 释放链接
            connection.release();

        });
    });
});  */
module.exports = router;
