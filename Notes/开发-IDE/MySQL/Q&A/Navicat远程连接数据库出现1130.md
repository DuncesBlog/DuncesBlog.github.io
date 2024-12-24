
# Navicat远程连接数据库 出现 1130
    该文创建于 2024/12/24 文章参考
[流畅的美杜莎.CSDN](https://blog.csdn.net/qq_42774234/article/details/124337976)


## 错误描述
使用Navicat连接远程数据库时出现1130错误:
1130- Host xxx is not allowed to connect to this MySQL server
翻译:1130 -不允许主机“192.168.1.10”连接到此MySQL服务器


## 解决
按照参考文章

#### 1.进入数据库中
``` bash
$ mysql -uuser -ppassword
```

#### 2.切换到mysql
``` bash
mysql> use mysql;
```

#### 3.设置root用户的链接权限
``` bash
mysql> update user set host = '%' where user ='root;
```

#### 4.刷新权限
``` bash
mysql> flush privileges;
```

#### 完成上述步骤，Navicat再次连接，就可以成功进入了。