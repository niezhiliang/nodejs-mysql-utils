var mysql = require('mysql')

var $conf = require('../conf/conf');


var pool = mysql.createPool( $conf.mysql );

var query = function (sql,res,data,callback) {
    console.log(sql+"\n")
    if(typeof data==='function'){
        data=[];
    }
    pool.getConnection(function (err,connection) {
        if (err) {
            console.log('获取连接失败\n')
        } else {
            connection.query(sql,data,function (err,result) {
                if (err) {
                    console.log('数据库操作失败\n')
                } else {
                    console.log(result)

                    if (callback == null) {
                        //数据以json格式返回前端
                        jsonWrite(res,result)
                    } else {
                        //回调函数  返回结果
                        callback(JSON.stringify(result))
                    }
                }
            })
            //连接放回连接池
            connection.release();
            //打印出连接数
            console.log(pool._allConnections.length);//0

        }
    })
}

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'50',
            msg: '操作失败'
        });
    } else {
        var response = {
            code : '20',
            msg: '操作成功',
            data: ret
        }
        res.json(response);
    }
};

module.exports = query


