
# Ubuntu 安装MySQL
    该文创建于 2024/12/23 文章参考
[LOVE_DDZ.CSDN](https://blog.csdn.net/weixin_45626288/article/details/133220238)


## 参数
在线从软件库安装
系统 Ubuntu
mysql版本 mysql-server（最新版8.0）


### 更新软件包列表
``` bash
sodu apt update
```

### 安装mysql服务器
安装前可以查询下在线可使用的安装包
``` bash
sudo apt search mysql-server
```
![](https://i-blog.csdnimg.cn/blog_migrate/866b2ffec9a5f9eabbc6323b732a1b5b.png)

安装
``` bash
# 安装最新版本
sudo apt install -y mysql-server    # 实操使用的最新版本
# 安装指定版本
sudo apt install -y mysql-server-8.0
```
如果不加 -y ,在安装过程中,系统将询问是否安装、提示设置mysql的root密码。

### 启动mysql服务
安装完成后,MySQL服务应该会自动启动,如未启动则使用如下命令启动
``` bash
sudo systemctl start mysql
```

### 设置开机自启动
``` bash
sudo systemctl enable mysql
```

### 检查MySQL状态
``` bash
sudo systemctl status mysql
```
![](https://i-blog.csdnimg.cn/blog_migrate/ac75e0e71daf863c252f590642ae6b50.png)

### 修改密码
``` bash
# 登陆mysql
$ sudo mysql -uroot -p  #这里是指定用户'root'无密码的方式登陆,如果是账户'baba'密码'guile'的,则 -ubaba -pguile
#设置密码 mysql8.0
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';
# 刷新缓存
mysql> flush privileges;
```