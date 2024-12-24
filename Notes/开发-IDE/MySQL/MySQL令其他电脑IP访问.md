
# MySQL令其他电脑IP访问
    该文创建于 2024/07/09 文章参考
[LOVE_DDZ.CSDN](https://blog.csdn.net/weixin_45626288/article/details/133220238)


## emmmm
MySQL8.0版本把配置文件 my.cnf 拆分成mysql.cnf 和mysqld.cnf，我们需要修改的是mysqld.cnf文件：
``` bash
$ sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

修改 **bind-address**,保存后重启MySQL即可.
``` vim
bind-address            = 0.0.0.0
```

然后重启MySQL重新加载一下配置即可:
``` bash
sudo systemctl restart mysql
```