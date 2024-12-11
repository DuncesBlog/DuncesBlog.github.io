
#查询和切换npm的下包镜像源
    该文创建于 2024/11/06
    文章参考 [](https://blog.csdn.net/qq1114565087/article/details/128640951)


# 查询镜像源
    在使用npm下包的时候,默认从国外的 https://registry.npmjs.org/ 服务器进行下载,此时,网络数据的传输需要经过漫长的海底光缆,因此下包速度会很慢。
``` Terminal
npm config get registry
```


# 切换镜像源
``` Terminal
npm config set registry https://registry.npm.taobao.org/
```
注意：切换之后要再次查询镜像源是否切换正确
