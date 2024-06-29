
# Ubuntu 设置笔记本合盖不休眠
	教程参考：	https://blog.csdn.net/qq_31635851/article/details/124627990
	vim命令参考:	https://zhuanlan.zhihu.com/p/155973403
	
	
## 操作流程
	
	切换到管理员账户
	$ sudo -i		
	
	vim打开配置文件
	$ vim /etc/systemd/logind.conf
	
	找到 HandleLidSwitch 行,修改未锁屏:
	按'i'键进入编辑模式
	...vim
	HandleLidSwitch=lock
	...vim
	
	然后按'Esc'键推出,输入':wq'后回车(w:保存, q:退出)
	
	最后重启服务
	$ service systemd-logind restart
	
	完成