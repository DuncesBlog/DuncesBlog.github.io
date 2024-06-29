import{_ as e,c as t,o as u,j as n,a as s}from"./chunks/framework.iMXuyU9c.js";const m=JSON.parse('{"title":"Ubuntu 安装SSH","description":"","frontmatter":{},"headers":[],"relativePath":"Linux_About/Ubuntu 安装SSH.md","filePath":"Linux_About/Ubuntu 安装SSH.md"}'),a={name:"Linux_About/Ubuntu 安装SSH.md"},o=n("h1",{id:"ubuntu-安装ssh",tabindex:"-1"},[s("Ubuntu 安装SSH "),n("a",{class:"header-anchor",href:"#ubuntu-安装ssh","aria-label":'Permalink to "Ubuntu 安装SSH"'},"​")],-1),r=n("h2",{id:"linux-启动远程访问",tabindex:"-1"},[s("Linux 启动远程访问 "),n("a",{class:"header-anchor",href:"#linux-启动远程访问","aria-label":'Permalink to "Linux 启动远程访问"'},"​")],-1),i=n("pre",null,[n("code",null,`要在Linux系统上启动远程访问，通常需要通过SSH（Secure Shell）服务来实现。以下是启动SSH服务并允许远程访问的步骤：

1.安装SSH服务（如果尚未安装）：

$ sudo apt-get update
$ sudo apt-get install openssh-server

2.启动SSH服务：

$ sudo systemctl start ssh

3.使SSH服务在系统启动时自动运行：

$ sudo systemctl enable ssh

4.配置防火墙允许SSH连接（默认端口22）：

$ sudo ufw allow ssh

5.查看SSH服务状态：

$ sudo systemctl status ssh

6.如果有UFW防火墙运行，请确保允许远程访问的端口（默认22）未被阻止：

$ sudo ufw status

7.获取Linux系统的IP地址：

$ ip addr show

现在，您可以从远程计算机使用SSH客户端通过用户名和IP地址来访问您的Linux系统了。例如：

ssh <username>@<your_linux_ip_address>

将<username>替换为您的Linux系统上的用户名，将<your_linux_ip_address>替换为您的Linux系统的IP地址。

Windows下可直接使用快捷方式,对象的位置填ssh <username>@<your_linux_ip_address>
`)],-1),d=[o,r,i];function l(_,S,c,h,x,p){return u(),t("div",null,d)}const H=e(a,[["render",l]]);export{m as __pageData,H as default};
