const db = require('../sql/dbConfig');

/* 用户登录 */
exports.login = (rep,res,next) => {
  let loginFrom = rep.body.loginFrom;
  let sql = 'SELECT * FROM users where name=? and password=?';
  let data = [loginFrom.username, loginFrom.password];
  db.base(sql,data,(response) => {
    if(response.length == 0){
      res.json({
        status: '1',
        msg: '无结果',
        result: ''
      });
    }else{
      res.json({
        status: '0',
        msg: '查询成功',
        result: response[0]
      })
    }
  })
} 