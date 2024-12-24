
# MySQL指令集
    该文创建于 2024/12/24
    系统: Ubuntu
    版本: MySQL 8.0


### 启停MySQL
``` bash
# 启动
$ sodo systemctl start mysql
# 重启
$ sodo systemctl restart mysql
# 停止
$ sodo systemctl stop mysql
```

### 设置MySQL开机自启
``` bash
$ sodo systemctl enable mysql
```

### 检查MySQL状态
``` bash
$ sodo systemctl status mysql
```

### 登陆MySQL
``` bash
$ sodo mysql -uuser -ppassword
```

### 设置密码
``` bash
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';
```

### 刷新缓存
``` bash
mysql> flush privileges;
```

### 查询mysql运行端口
``` bash
# 方法一
mysql> show variables like 'point';
# 方法二
mysql> status;
# 方法三
mysql> show global variables like 'port';
```