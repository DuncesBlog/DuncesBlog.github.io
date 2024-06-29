import{_ as t,c as e,o as a,a4 as n}from"./chunks/framework.iMXuyU9c.js";const p=JSON.parse('{"title":"Ubuntu 系统盘制作","description":"","frontmatter":{},"headers":[],"relativePath":"Linux_About/Ubuntu 系统盘制作.md","filePath":"Linux_About/Ubuntu 系统盘制作.md"}'),o={name:"Linux_About/Ubuntu 系统盘制作.md"},r=n(`<h1 id="ubuntu-系统盘制作" tabindex="-1">Ubuntu 系统盘制作 <a class="header-anchor" href="#ubuntu-系统盘制作" aria-label="Permalink to &quot;Ubuntu 系统盘制作&quot;">​</a></h1><h2 id="工具准备" tabindex="-1">工具准备 <a class="header-anchor" href="#工具准备" aria-label="Permalink to &quot;工具准备&quot;">​</a></h2><pre><code>iso镜像地址
软碟通 刻录软件地址	https://cn.ultraiso.net/
</code></pre><h2 id="ultraiso-软件制作系统盘" tabindex="-1">UltraISO 软件制作系统盘 <a class="header-anchor" href="#ultraiso-软件制作系统盘" aria-label="Permalink to &quot;UltraISO 软件制作系统盘&quot;">​</a></h2><pre><code>导入iso
启动 --&gt; 刻录硬盘映像  弹出刻录窗
刻录制作,太简单了,直接完成吧
</code></pre><h2 id="写入系统遇到的问题" tabindex="-1">写入系统遇到的问题: <a class="header-anchor" href="#写入系统遇到的问题" aria-label="Permalink to &quot;写入系统遇到的问题:&quot;">​</a></h2><pre><code>1.想要制作双系统,windows7不会被检测到

2.U盘启动时遇到的问题
2.1 电脑显示
no systemdisk.booting from harddisk
start booting from USB device
问题:系统引导没有写入U盘或者被分区无法识别
解决:更新最新的软碟通
	
	
2.2 电脑显示
error: symbol &#39;grub_calloc&#39; not found.
解决:重启设置BLOS,允许UEFI启动,并将安全启动选项(Secure boot)关闭
</code></pre>`,7),u=[r];function i(s,c,d,_,l,h){return a(),e("div",null,u)}const m=t(o,[["render",i]]);export{p as __pageData,m as default};
