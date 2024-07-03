
# 网页收藏夹
    [MarkDown文件插入图片.CSDN](https://blog.csdn.net/Aoman_Hao/article/details/134385318),

    [Markdown 文档基础语法.B站](https://www.bilibili.com/video/BV1eJ4m157kC)




---
下面抄自于[CodeSheep.B站](https://www.bilibili.com/video/BV1w3411N7zM),视频时间(04:40)

# 一级标题

## 二级标题

### 三级标题

**加粗正文** 正文内容 *倾斜文本* 正文内容

分隔符
---

图片:
![](https://q6.itc.cn/q_70/images03/20240601/80b789341c9b45cb8a76238650d288a5.png)

代码块
``` java
public static void main(string[] args){
    Map<String, Double> hashMap = new HashMap<>();
    hashMap.put("a", 0.1);
    hashMap.put("b", 0.2);
    hashMap.put("c", 0.3);

    for(Map.Entry<String, Double> entry : hashMap.entrySet()){
        System.out.println(entry.getKey() + ": " + entry.getValue());
    }
}
```

数学公式:

$$
\left[
\begin{array}{c|ccc}
a & b & \cdots & h\\
a & b & \cdots & h\\ \hline
\vdots & \vdots & \ddots & \vdots\\a & b & \cdots & h
\end{array}
\right]
$$

$$
f(x_1, x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2
$$

$$\sum_{n-1}^t x_n=0$$

表格:
常用命令 | 作用 -- | --
uname -a | 查看内核/OS/CPU信息
uname -r | 查看内核版本
uname -m | 查看处理器架构
arch | 查看处理器架构
hostname | 查看计算机名
who | 显示当前登陆系统的用户
who am i | 显示登录时的用户名
whoami | 显示当前用户名
uptime | 查看系统运行时间、用户数、负载
env | 查看系统的环境变量

流程图：

```flow
st=>start: 开始
e=>end: 结束
op=>operation:执行某个代码块
cond=>condition:是否满足条件
st->op->cond
cond(yes)->e
cond(no)->op
```

待办事项：

- [ ] 操作系统学习
    - [x] 内存管理学习
    - [x] 进程管理学习
    - [ ] 文件系统学习
- [ ] 计算机网络学习
    - [x] 物理层
    - [x] 数据链路层
    - [ ] 网络层

列表:

- 无序列表1
- 无序列表2
- 无序列表3

1.有序列表1
2.有序列表2
3.有序列表3

引用:

> 实际企业级开发和项目部署,大部分情况下基本都是基于Linux环境进行的,所以掌握常用的命令、配置、网络和系统管理,基本的shell编程等尽量还是要熟练一些,对后续项目实践都大有裨益。

脚注[^note]
[^note]: 关于脚注的补充解释