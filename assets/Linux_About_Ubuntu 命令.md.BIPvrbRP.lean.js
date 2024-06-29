import{_ as n,c as e,o as a,j as t,a as u}from"./chunks/framework.iMXuyU9c.js";const f=JSON.parse('{"title":"Ubuntu 命令","description":"","frontmatter":{},"headers":[],"relativePath":"Linux_About/Ubuntu 命令.md","filePath":"Linux_About/Ubuntu 命令.md"}'),s={name:"Linux_About/Ubuntu 命令.md"},o=t("h1",{id:"ubuntu-命令",tabindex:"-1"},[u("Ubuntu 命令 "),t("a",{class:"header-anchor",href:"#ubuntu-命令","aria-label":'Permalink to "Ubuntu 命令"'},"​")],-1),d=t("pre",null,[t("code",null,`Q:如何换源来着???

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
`)],-1),r=[o,d];function l(c,i,p,_,b,h){return a(),e("div",null,r)}const x=n(s,[["render",l]]);export{f as __pageData,x as default};
