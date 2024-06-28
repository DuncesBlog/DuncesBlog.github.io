# 本地构建 VitePress
    参考文档
        官网：https://vitepress.dev/zh/guide/getting-started


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
    

