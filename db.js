const express=require("express");
const mysql=require("mysql");

var app=express();

//连接数据库
var db=mysql.createConnection({host: "localhost",
							port: "3306",
							user: "root",
							password: "m5488788",
              database: "graduation"});
  db.connect();
//2.发送请求(查询)
db.query("SELECT * FROM users",function(err,data){
  if(err) throw err;
  console.log('连接成功');
})