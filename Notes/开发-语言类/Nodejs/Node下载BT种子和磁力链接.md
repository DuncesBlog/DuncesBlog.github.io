
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
tget 'magnet:?xt=urn:btih:0403fb4728bd788fbcb67e87d6feb241ef38c75a'
```

## Q&A
- 一定要使用 -g 参数安装到系统环境，不然 tget指令无法识别

- 安装后使用遇到问题
```
tget : 无法加载文件 C:\Users\Administration\AppData\Roaming\npm\tget.ps1，因为在
此系统上禁止运行脚本。有关详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkI
D=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ tget -v
+ ~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
处理办法:
使用
[_cris.CSDM](https://blog.csdn.net/weixin_37861326/article/details/104295379)的方法尝试
``` 管理员的PowerShell
set-ExecutionPolicy RemoteSigned
```
不过,我先查询一下当前的执行策略
``` 管理员的PowerShell
get-ExecutionPolicy
# 输出:
Restricted
```
然后按博主的方式更改,然后重新尝试tget下载,可以正常识别了!