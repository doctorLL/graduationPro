var UserSQL = {
    insert: 'INSERT INTO users(id,name,PASSWORD) VALUES(null,?,?)', // 插入数据
    drop: 'DROP TABLE users', // 删除表中所有的数据
    queryAll: 'SELECT * FROM users', // 查找表中所有数据
    getUserById: 'SELECT * FROM users WHERE id =?', // 查找符合条件的数据
};
module.exports = UserSQL;