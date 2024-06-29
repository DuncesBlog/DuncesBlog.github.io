import{_ as e,c as a,o,j as n,a as t}from"./chunks/framework.iMXuyU9c.js";const v=JSON.parse('{"title":"Ubuntu 设置笔记本合盖不休眠","description":"","frontmatter":{},"headers":[],"relativePath":"Linux_About/Ubuntu 设置笔记本合盖不休眠.md","filePath":"Linux_About/Ubuntu 设置笔记本合盖不休眠.md"}'),s={name:"Linux_About/Ubuntu 设置笔记本合盖不休眠.md"},i=n("h1",{id:"ubuntu-设置笔记本合盖不休眠",tabindex:"-1"},[t("Ubuntu 设置笔记本合盖不休眠 "),n("a",{class:"header-anchor",href:"#ubuntu-设置笔记本合盖不休眠","aria-label":'Permalink to "Ubuntu 设置笔记本合盖不休眠"'},"​")],-1),c=n("pre",null,[n("code",null,`教程参考：	https://blog.csdn.net/qq_31635851/article/details/124627990
vim命令参考:	https://zhuanlan.zhihu.com/p/155973403
`)],-1),u=n("h2",{id:"操作流程",tabindex:"-1"},[t("操作流程 "),n("a",{class:"header-anchor",href:"#操作流程","aria-label":'Permalink to "操作流程"'},"​")],-1),d=n("pre",null,[n("code",null,`切换到管理员账户
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
`)],-1),r=[i,c,u,d];function _(l,h,m,b,p,f){return o(),a("div",null,r)}const U=e(s,[["render",_]]);export{v as __pageData,U as default};
