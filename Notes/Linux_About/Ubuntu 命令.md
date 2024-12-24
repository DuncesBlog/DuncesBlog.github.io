
# Ubuntu 命令
	Q:如何换源来着???
	
	sudo apt-cache search			可以查询和显示已安装和可安装软件包的可用信息

	sudo apt-get update				更新软件库
	sudo apt-get install <包名>		安装软件
	sudo apt-get install <./url/包名>	安装本地软件包	
	sudo apt-get install -f -y		安装软件 时发现缺少依赖，可以用它补充依赖（貌似会继续安装软件）
	
	sudo dpkg -i <包名>.deb			安装本地软件包
	sudo dpkg -r <软件名>			卸载已经安装的软件
	
	
	sudo cp <url1>/文件名 </url2/>	拷贝 将文件复制到url2目录下
	
	sudo systemctl enable 软件名	系统启动时自动运行
	
	ip addr show					查看ip
	
	切换到管理员账户
	$ sudo -i

### 查询当前工作目录
``` bash
$ pwd
```

### 查询系统架构
``` bash
uname -m
# 这个命令会输出你的系统架构。如果输出是 x86_64，那么你的系统是 64 位的 x86 架构（通常我们称之为 x64）。
# 如果输出是 armv7l 或者以 arm 开头的其他值，那么你的系统是 ARM 架构。
```

### 查询详细的系统信息
``` bash
lscpu
```

### 查询某软件的可用版本
``` bash
sudo apt search mysql-server	# 以mysql举例
```