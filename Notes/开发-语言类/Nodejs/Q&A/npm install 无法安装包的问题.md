
# npm install 无法安装包的问题
    该文创建于 2024/07/09 文章参考
[]()


## 问题表现
- 下载包超时
``` CMD
>npm install t-get
# 输出:
npm error code ECONNRESET
npm error syscall read
npm error errno ECONNRESET
npm error network request to https://registry.npmjs.org/get-stdin failed, reason: rea
d ECONNRESET
npm error network This is a problem related to network connectivity.
npm error network In most cases you are behind a proxy or have bad network settings.
npm error network
npm error network If you are behind a proxy, please make sure that the
npm error network 'proxy' config is set properly.  See: 'npm help config'

npm error A complete log of this run can be found in: C:\Users\Administration\AppData
\Local\npm-cache\_logs\2024-12-11T01_10_06_851Z-debug-0.log
```
- ping命令可以ping通

## 解决流程
- 根据
[清晨細雨.CSDN](https://blog.csdn.net/qq_16785561/article/details/140782167)
的方式尝试: 执行以下代码，将 npm 的代理设置重置为无（即不使用代理）

首先，我先查询了下当前代理设置
```
npm config get proxy
# 输出:
null
```
查询结果是null,和博主清晨細雨的设置相同,但是,我还是再一次进行了设置操作
```
npm config set proxy null
```
然后再次进行 安装包 操作
```
npm install t-get
# 输出:
npm error code ETIMEDOUT
npm error syscall connect
npm error errno ETIMEDOUT
npm error network request to https://registry.npmjs.org/get-stdin failed, reason: con
nect ETIMEDOUT 2606:4700::6810:1822:443
npm error network This is a problem related to network connectivity.
npm error network In most cases you are behind a proxy or have bad network settings.
npm error network
npm error network If you are behind a proxy, please make sure that the
npm error network 'proxy' config is set properly.  See: 'npm help config'
```
还是无法安装,并且错误提示变了

这和另一个博主的错误一致，参照设置，将 https代理也重置一遍
```
npm config set https-proxy null
```
在运行依然不行

最后,做我曾经做过无效,现在不想做的事情,换源
```
npm config set registry https://registry.npm.taobao.org/
```

欸!这回成功下载了!

但是下载t-get包好像还有什么问题,之后再说了