
# VitePress
    VitePress 是一个由 Vite 和 Vue 共同驱动的 SSG（静态站点生成器）。

    如果你像我一样，不太清楚 MPA/SPA/SSR/SSG/...... 等一大坨客户端和服务端渲染方式的魔鬼细节，那我们可以用一句话简单理解 VitePress —— Vue/VueUse/Pinia/Vite/Vitest 等官方文档，都是基于 VitePress 构建的。(此处摘抄自[前端俱乐部](https://juejin.cn/post/7349119662134018063))

    VitePress 的设计动机就是构建快速、内容优先的站点。它可以将 Markdown 编写的一切内容，根据应用的主题生成静态 HTML 页面


# 本地构建 VitePress
    参考文档
        官网[Shiki](https://vitepress.dev/zh/guide/getting-started)


# 打包网站并部署到Github
    先说 GitHub Pages
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
    

