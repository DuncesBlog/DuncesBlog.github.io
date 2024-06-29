
# Ubuntu 安装Docker
	Docker：	https://www.docker.com/products/docker-desktop/
	参考docker官网教程：https://docs.docker.com/engine/install/ubuntu/

## 操作流程

	1.卸载旧版本
	$ for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
	
	2.设置 Docker 的存储库。
	$ sudo apt-get update
	$ sudo apt-get install ca-certificates curl
	$ sudo install -m 0755 -d /etc/apt/keyrings
	$ sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
	$ sudo chmod a+r /etc/apt/keyrings/docker.asc

	3.??? 下面这一行我运行过吗????
	$ echo \
	  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
	  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
	  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
	$ sudo apt-get update
	
	4.安装 Docker 包
	$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
	
	5.通过运行映像来验证 Docker 引擎安装是否成功。
	$ sudo docker run hello-world
	
	$ docker --version
	
	$ sudo systemctl start docker  启动docker
	
	$ sudo systemctl enable docker	系统启动时自动运行
	
	
## 常用命令
	
	查看镜像
	$ sudo docker images
	
	运行镜像
	$ sudo docker run <-参数> 镜像名称			如果有,直接运行,没有,下载后运行
		-d ——detach后台静默安装
		-p ——publish 打开
		
	查看当前正在运行的容器列表,找到使用该容器的ID (CONTAINER ID)
	$ sudo docker ps
		-a 查看所有容器
		-q 仅查看容器ID
		
	启动停止的容器
	$ sudo docker start 容器ID
	
	停止指定的运行容器
	$ sudo docker stop 容器ID
	
	删除已停止的容器
	$ sudo docker rm 容器ID
	
	删除镜像
	$ sudo docker rmi 镜像ID
	
	
	
	高级命令用法
	容器:
		$ sudo docker start $(docker ps -a -q)	// start启动所有停止的容器
		$ sudo docker stop $(docker ps -a -q)		// stop停止所有容器
		$ sudo docker rm $(docker ps -a -q)		// remove删除所有容器
	镜像:
		$ sudo docker rmi $(docker images -q)		// 删除所有镜像
		$ sudo docker rm $(docker ps -qf status=exited)	//根据格式删除所有镜像
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	