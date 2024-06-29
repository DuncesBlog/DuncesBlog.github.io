
# Ubuntu Docker安装memos

## 个人空间	Memos
	介绍：		类似于微博朋友圈(信息流)样式的一个‘闪念’软件，数据全部存储在个人本地
				需要使用docker安装 [docker安装]('../Linux_About/Ubuntu 安装Docker')
	讲解视频：	https://www.bilibili.com/video/BV1mK411s76Y
				推荐：04:19		安装：05：05		06：18
	GitHub：	https://github.com/usememos/memos 
	官网:		https://www.usememos.com/docs/install/self-hosting
	
	
## 操作流程
	安装memos
	$ sudo docker run neosmemo/memos:latest			
		latest 最新的
	
	启动
	$ sudo docker run -d -p 5230:5230 neosmemo/memos:latest
		-d ——detach后台静默安装
		-p ——publish 打开
	此方法每次打开都是一个新的配置,不建议使用
	
	memos官网提供的启动方式
	$ sudo docker run -d \
	  --init \
	  --name memos \
	  --publish 5230:5230 \
	  --volume ~/.memos/:/var/opt/memos \
	  neosmemo/memos:stable