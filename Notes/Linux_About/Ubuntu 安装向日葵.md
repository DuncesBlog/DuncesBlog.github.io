
# Ubuntu 安装向日葵

下载deb文件	[deb](https://sunlogin.oray.com/download/linux)

## 安装
	* 有ubuntu桌面的,双击包安装
	  安装界面闪退,另寻他法

	* 命令安装
	  $ sudo dpkg -i <包名>.deb
	  发生错误,提示 <Image >
	  根据官网提供的"向日葵Linux因安装依赖问题无法安装成功的解决办法"(https://service.oray.com/question/8286.html)中的情况1
	  使用命令行
	  $ sudo apt-get install -f -y
	  安装完成
	
## 启动
	桌面版 软件列表中已经有软件图标了,双击即可
	或 使用命令行
	$ /usr/local/sunlogin/bin/sunloginclient
	
## 卸载
	$ sudo dpkg -r sunloginclient