import{_ as e,c as t,o as a,a4 as n}from"./chunks/framework.iMXuyU9c.js";const p=JSON.parse('{"title":"Ubuntu 安装向日葵","description":"","frontmatter":{},"headers":[],"relativePath":"Linux_About/Ubuntu 安装向日葵.md","filePath":"Linux_About/Ubuntu 安装向日葵.md"}'),o={name:"Linux_About/Ubuntu 安装向日葵.md"},r=n(`<h1 id="ubuntu-安装向日葵" tabindex="-1">Ubuntu 安装向日葵 <a class="header-anchor" href="#ubuntu-安装向日葵" aria-label="Permalink to &quot;Ubuntu 安装向日葵&quot;">​</a></h1><p>下载deb文件 <a href="https://sunlogin.oray.com/download/linux" target="_blank" rel="noreferrer">deb</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><pre><code>* 有ubuntu桌面的,双击包安装
  安装界面闪退,另寻他法

* 命令安装
  $ sudo dpkg -i &lt;包名&gt;.deb
  发生错误,提示 &lt;Image &gt;
  根据官网提供的&quot;向日葵Linux因安装依赖问题无法安装成功的解决办法&quot;(https://service.oray.com/question/8286.html)中的情况1
  使用命令行
  $ sudo apt-get install -f -y
  安装完成
</code></pre><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><pre><code>桌面版 软件列表中已经有软件图标了,双击即可
或 使用命令行
$ /usr/local/sunlogin/bin/sunloginclient
</code></pre><h2 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h2><pre><code>$ sudo dpkg -r sunloginclient
</code></pre>`,8),u=[r];function i(l,s,d,c,_,h){return a(),t("div",null,u)}const m=e(o,[["render",i]]);export{p as __pageData,m as default};
