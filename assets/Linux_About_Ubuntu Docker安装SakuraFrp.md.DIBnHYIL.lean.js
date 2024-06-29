import{_ as n,c as a,o as t,j as e,a as r}from"./chunks/framework.iMXuyU9c.js";const S=JSON.parse('{"title":"Ubuntu Docker安装SakuraFrp","description":"","frontmatter":{},"headers":[],"relativePath":"Linux_About/Ubuntu Docker安装SakuraFrp.md","filePath":"Linux_About/Ubuntu Docker安装SakuraFrp.md"}'),o={name:"Linux_About/Ubuntu Docker安装SakuraFrp.md"},u=e("h1",{id:"ubuntu-docker安装sakurafrp",tabindex:"-1"},[r("Ubuntu Docker安装SakuraFrp "),e("a",{class:"header-anchor",href:"#ubuntu-docker安装sakurafrp","aria-label":'Permalink to "Ubuntu Docker安装SakuraFrp"'},"​")],-1),c=e("pre",null,[e("code",null,`SakuraFrp		https://www.natfrp.com/user/
docker安装教程	https://doc.natfrp.com/launcher/usage.html
`)],-1),s=e("h2",{id:"操作流程",tabindex:"-1"},[r("操作流程 "),e("a",{class:"header-anchor",href:"#操作流程","aria-label":'Permalink to "操作流程"'},"​")],-1),d=e("pre",null,[e("code",null,`安装启动容器
$ sudo docker run \\
   -d \\
   --network=host \\
   --restart=on-failure:5 \\
   --pull=always \\
   --name=natfrp-service \\
   natfrp/launcher

获取连接信息
$ sudo docker logs natfrp-service
结果-->	
============= Service Running =============
WebUI 端口: 4101
WebUI 密码: mo%3ZBPTAEW%0rXcEIdFM3SU
请使用 https:// 进行连接
============= Service Running =============
`)],-1),i=[u,c,s,d];function l(p,k,_,h,b,f){return t(),a("div",null,i)}const U=n(o,[["render",l]]);export{S as __pageData,U as default};
