
# Node下载BT种子和磁力链接
    该文创建于 2024/07/09
    文章参考 []()


## t-get
t-get是一个简单的命令行BT下载工具，可以用于BT种子和磁力链接的下载
t-get使用Nodejs开发，基于torrent-stream，代码量很少

安装t-get
``` terminal
npm install -g t-get
```

磁力链接的下载
``` terminal
tget 'magnet:?xt=urn:bith:0403fb4728bd788fbcb67e87d6feb241ef38c75a'

tget ubuntu-16.04.1-desktop-amd64.iso.torrent
```