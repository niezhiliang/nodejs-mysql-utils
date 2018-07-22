# nodejs-mysql-utils
nodejs mysql连接池
```javascript

1. git clone https://github.com/niezhiliang/nodejs-mysql-utils

2.导入数据，项目根目录下面有个nodejs.sql 建立好数据库， 将conf/conf.js改为你数据库的配置

3. npm install (下载依赖库)

4. 进入bin/   运行www.js （运行项目,默认端口3000）
node www.js

5.打开浏览器访问 

//获取所有的用户
http://127.0.0.1:3000/users/get_all

  {
    "code": "20",
    "msg": "操作成功",
    "data": [{
      "id": 1,
      "name": "赵丽颖",
      "sex": "女",
      "age": 26
    }, {
      "id": 2,
      "name": "刘德华",
      "sex": "男",
      "age": 56

    }]
  }
  
// 通过id获取user
http://127.0.0.1:3000/users/get_user?id=2

  {
	"code": "20",
	"msg": "操作成功",
	"data": [{
		"id": 2,
		"name": "赵丽颖",
		"sex": "女",
		"age": 26
	}]
}

//通过id删除用户
http://127.0.0.1:3000/users/delete_user?id=2
  {
	"code": "20",
	"msg": "操作成功",
	"data": {
		"fieldCount": 0,
		"affectedRows": 1,
		"insertId": 0,
		"serverStatus": 2,
		"warningCount": 0,
		"message": "",
		"protocol41": true,
		"changedRows": 0
	}
}

//修改用户信息地址
http://127.0.0.1:3000/users/update_user?id=3&name=苏雨&sex=女&age=22

//添加用户地址
http://127.0.0.1:3000/users/add_user?name=%E8%8B%8F%E9%9B%A8&sex=%E5%A5%B3&age=23
```
