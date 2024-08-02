
# 如何搭建Node项目
    该文创建于 2024/07/10
文章参考 [辰之道.博客园](https://www.cnblogs.com/chongsaid/p/nodejs_getStart.html)

**npm 概念**
    npm 是一个包管理器，它可以对项目的依赖文件进行加载，卸载等操作，同时可以创建一个项目的配置文件（package.json）
    同样的，一个项目需要怎样的依赖环境，都需要 npm 来配置


## 1.创建目标文件夹
    打开文件管理器，在你想要的索引位置上新建一个文件夹，文件夹的名称即是项目名

## 2.初始化包管理配置文件
    打开 DOS / 终端 ，执行 npm 进行项目配置文件的创建（注意，在项目的当前文件夹）
``` DOS
npm init -y
```
    将会在项目目录下创建一个 package.json 文件,其中author，指的是开发者名称，而 main，指的是初始化时指定的主文件入口

## 3.创建项目必备文件夹以及文件
![](https://img2018.cnblogs.com/i-beta/1140908/202002/1140908-20200211125944342-706759673.png)
    注意：package-lock.json 不必手动创建，以及 node_modules 文件夹亦无需创建。

    仅需创建：bin、public、routes、views 文件夹，同时创建一个名为 app.js ，它将作为主函数入口。

    【重要】请在 package.json 中手动将其中的 main 属性配置为 app.js （ 自动生成的默认为 index.js ）

## 4.安装框架或插件
    以express框架为例,express 框架是 node.js 官方推荐的框架

    安装：在当前的项目根目录中打开 DOS / 终端，之后执行以下命令：
``` DOS
npm install express -save
```
    -save ：自动将模块和版本号添加到 dependencies 部分
    -save -dev ：自动将模块和版本号添加到 devdependencies 部分

## 5.开发
    省略

## 6.启动
    在项目根目录中打开 DOS / 终端，执行 node app.js 
``` DOS
node app.js
```