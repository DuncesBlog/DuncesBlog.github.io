import{_ as a,c as s,o as t,a4 as i}from"./chunks/framework.iMXuyU9c.js";const b=JSON.parse('{"title":"Ubuntu 命令","description":"","frontmatter":{},"headers":[],"relativePath":"Linux_About/Ubuntu 命令.md","filePath":"Linux_About/Ubuntu 命令.md"}'),e={name:"Linux_About/Ubuntu 命令.md"},n=i(`<h1 id="ubuntu-命令" tabindex="-1">Ubuntu 命令 <a class="header-anchor" href="#ubuntu-命令" aria-label="Permalink to &quot;Ubuntu 命令&quot;">​</a></h1><pre><code>Q:如何换源来着???

sudo apt-cache search			可以查询和显示已安装和可安装软件包的可用信息

sudo apt-get update				更新软件库
sudo apt-get install &lt;包名&gt;		安装软件
sudo apt-get install &lt;./url/包名&gt;	安装本地软件包	
sudo apt-get install -f -y		安装软件 时发现缺少依赖，可以用它补充依赖（貌似会继续安装软件）

sudo dpkg -i &lt;包名&gt;.deb			安装本地软件包
sudo dpkg -r &lt;软件名&gt;			卸载已经安装的软件


sudo cp &lt;url1&gt;/文件名 &lt;/url2/&gt;	拷贝 将文件复制到url2目录下

sudo systemctl enable 软件名	系统启动时自动运行

ip addr show					查看ip

切换到管理员账户
$ sudo -i
</code></pre><h3 id="查询当前工作目录" tabindex="-1">查询当前工作目录 <a class="header-anchor" href="#查询当前工作目录" aria-label="Permalink to &quot;查询当前工作目录&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pwd</span></span></code></pre></div><h3 id="查询系统架构" tabindex="-1">查询系统架构 <a class="header-anchor" href="#查询系统架构" aria-label="Permalink to &quot;查询系统架构&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uname</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这个命令会输出你的系统架构。如果输出是 x86_64，那么你的系统是 64 位的 x86 架构（通常我们称之为 x64）。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果输出是 armv7l 或者以 arm 开头的其他值，那么你的系统是 ARM 架构。</span></span></code></pre></div><h3 id="查询详细的系统信息" tabindex="-1">查询详细的系统信息 <a class="header-anchor" href="#查询详细的系统信息" aria-label="Permalink to &quot;查询详细的系统信息&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lscpu</span></span></code></pre></div><h3 id="查询某软件的可用版本" tabindex="-1">查询某软件的可用版本 <a class="header-anchor" href="#查询某软件的可用版本" aria-label="Permalink to &quot;查询某软件的可用版本&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql-server</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 以mysql举例</span></span></code></pre></div>`,10),l=[n];function h(p,d,o,r,u,c){return t(),s("div",null,l)}const g=a(e,[["render",h]]);export{b as __pageData,g as default};
