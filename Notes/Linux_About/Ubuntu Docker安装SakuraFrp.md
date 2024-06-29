
# Ubuntu Docker安装SakuraFrp


	SakuraFrp		https://www.natfrp.com/user/
	docker安装教程	https://doc.natfrp.com/launcher/usage.html
	
## 操作流程

	安装启动容器
	$ sudo docker run \
	   -d \
	   --network=host \
	   --restart=on-failure:5 \
	   --pull=always \
	   --name=natfrp-service \
	   natfrp/launcher

	获取连接信息
	$ sudo docker logs natfrp-service
	结果-->	
	============= Service Running =============
	WebUI 端口: 4101
	WebUI 密码: mo%3ZBPTAEW%0rXcEIdFM3SU
	请使用 https:// 进行连接
	============= Service Running =============