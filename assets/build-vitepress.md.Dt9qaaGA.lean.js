import{_ as s,c as n,o as a,j as e,a as t}from"./chunks/framework.BJ4bFU3Q.js";const v=JSON.parse('{"title":"本地构建 VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"build-vitepress.md","filePath":"build-vitepress.md"}'),i={name:"build-vitepress.md"},r=e("h1",{id:"本地构建-vitepress",tabindex:"-1"},[t("本地构建 VitePress "),e("a",{class:"header-anchor",href:"#本地构建-vitepress","aria-label":'Permalink to "本地构建 VitePress"'},"​")],-1),o=e("pre",null,[e("code",null,`参考文档
    官网：https://vitepress.dev/zh/guide/getting-started
`)],-1),d=e("h1",{id:"打包网站并部署到github",tabindex:"-1"},[t("打包网站并部署到Github "),e("a",{class:"header-anchor",href:"#打包网站并部署到github","aria-label":'Permalink to "打包网站并部署到Github"'},"​")],-1),l=e("pre",null,[e("code",null,`先说 GitHub Pages
0.GitHub Actions 我也不会用 /哭
1.部署里选择分支，怎么选择，save后都会保存成默认分支

再说官网给的方案
emmm，官网给的deploy.sh我搞不懂……
大致来说官网给的方案是 在github上创建两个分支，
A分支存储开发项目
B分支存储生成的静态网页

所以我用了老笨的办法：

1）解决分支上传问题
在git ide上创建了ab两个库来对应两个分支，a->A, b->B
两个库分别上传到这个 GitHub 的两个分支里来

2）解决 GitHub Pages 选择分支部署问题
切换默认分支为 GitHub Pages 分支（早不知道啊，早知道就用master存放静态页面了）
`)],-1),c=[r,o,d,l];function h(u,p,_,b,m,g){return a(),n("div",null,c)}const P=s(i,[["render",h]]);export{v as __pageData,P as default};
