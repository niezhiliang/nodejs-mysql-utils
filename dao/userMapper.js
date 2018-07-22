module.exports = {
    selectAll: 'select * from user',
    selectById: 'select * from user where id = ?',
    deleteById: 'delete from user where id = ?',
    updateUserById: 'update user set name = ? ,sex = ? age = ? where id = ?',
    insertUser: 'insert into user(name,sex,age) values(?,?,?) '
}