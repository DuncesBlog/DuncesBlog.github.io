import{_ as e,c as o,o as t,a4 as s}from"./chunks/framework.iMXuyU9c.js";const b=JSON.parse('{"title":"Ubuntu Docker安装memos","description":"","frontmatter":{},"headers":[],"relativePath":"Blogs_Tools_List/Memos/Ubuntu Docker安装memos.md","filePath":"Blogs_Tools_List/Memos/Ubuntu Docker安装memos.md"}'),m={name:"Blogs_Tools_List/Memos/Ubuntu Docker安装memos.md"},n=s(`<h1 id="ubuntu-docker安装memos" tabindex="-1">Ubuntu Docker安装memos <a class="header-anchor" href="#ubuntu-docker安装memos" aria-label="Permalink to &quot;Ubuntu Docker安装memos&quot;">​</a></h1><h2 id="个人空间memos" tabindex="-1">个人空间 Memos <a class="header-anchor" href="#个人空间memos" aria-label="Permalink to &quot;个人空间	Memos&quot;">​</a></h2><pre><code>介绍：		类似于微博朋友圈(信息流)样式的一个‘闪念’软件，数据全部存储在个人本地
			需要使用docker安装 [docker安装](&#39;../Linux_About/Ubuntu 安装Docker&#39;)
讲解视频：	[B站](https://www.bilibili.com/video/BV1mK411s76Y)
			推荐：04:19		安装：05：05		06：18
GitHub：	https://github.com/usememos/memos 
官网:		https://www.usememos.com/docs/install/self-hosting
收藏视频:	[备份迁移升级.B站](https://www.bilibili.com/video/BV1Tc411T771)
</code></pre><h2 id="操作流程" tabindex="-1">操作流程 <a class="header-anchor" href="#操作流程" aria-label="Permalink to &quot;操作流程&quot;">​</a></h2><pre><code>安装memos
$ sudo docker run neosmemo/memos:latest			
	latest 最新的

启动
$ sudo docker run -d -p 5230:5230 neosmemo/memos:latest
	-d ——detach后台静默安装
	-p ——publish 打开
此方法每次打开都是一个新的配置,不建议使用

memos官网提供的启动方式
$ sudo docker run -d \\
  --init \\
  --name memos \\
  --publish 5230:5230 \\
  --volume ~/.memos/:/var/opt/memos \\
  neosmemo/memos:stable
</code></pre>`,5),a=[n];function r(c,u,i,d,l,_){return t(),o("div",null,a)}const p=e(m,[["render",r]]);export{b as __pageData,p as default};
