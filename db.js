const express=require("express");
const mysql=require("mysql");
const DBConfig = require('./db/DBConfig')
let userSQL = require('./db/Usersql');

var app=express();

//连接数据库
var db=mysql.createPool(DBConfig.mysql);
//2.发送请求(查询)
db.getConnection(function(err, connection) {
  connection.query(userSQL.queryAll, function(err, data) {
    if(err) throw err;
    console.log(data);
    console.log("连接成功");
  })
})

/* db.query("SELECT * FROM users",function(err,data){
  if(err) throw err;
  console.log(data);
  console.log('连接成功');
}) */