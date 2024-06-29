
# Ubuntu 系统盘制作

## 工具准备
	iso镜像地址
	软碟通 刻录软件地址	https://cn.ultraiso.net/
	
## UltraISO 软件制作系统盘
	导入iso
	启动 --> 刻录硬盘映像  弹出刻录窗
	刻录制作,太简单了,直接完成吧
		

## 写入系统遇到的问题:
	1.想要制作双系统,windows7不会被检测到
	
	2.U盘启动时遇到的问题
	2.1 电脑显示
	no systemdisk.booting from harddisk
	start booting from USB device
	问题:系统引导没有写入U盘或者被分区无法识别
	解决:更新最新的软碟通
		
		
	2.2 电脑显示
	error: symbol 'grub_calloc' not found.
	解决:重启设置BLOS,允许UEFI启动,并将安全启动选项(Secure boot)关闭