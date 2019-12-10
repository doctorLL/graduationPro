const mysql = require("mysql");

exports.base = (sql,data,callback) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "m5488788",
    database: "graduation"
  });

  connection.connect();   //执行连接

  //操作数据库
  connection.query(sql,data, function(error, results){
      if(error) throw error;
      callback(results);
      console.log("数据连接成功");
  });
  connection.end();
}   