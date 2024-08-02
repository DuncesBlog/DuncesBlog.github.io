
# Http 和 Socketio 共用一个地址
    该文创建于 2024/07/10
    
    在Node.js中，可以使用http模块来创建一个基本的HTTP服务器，然后使用socket.io库在此服务器的基础上添加实时通信功能。
    socket.io会自动处理HTTP请求，并在必要时升级连接到WebSocket。

## 原理
    WebSocket 是基于 HTTP 1.1 的一个功能，它本身是依赖 HTTP 的（使用 101 状态码来切换协议）。
    与HTTP的唯一关系是它的握手由HTTP服务器作为升级请求。握手的时候使用HTTP协议的101来切换协议。

## 代码
    实际就是不使用指定端口初始化socket，而是改用http服务来初始化

``` Javascript
const http = require('http');
const socketIO = require('socket.io');

const httpServer = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Socket.io</h1>');
})

// 初始化Socket.io
const io = socketIO(httpServer);

// http事件
httpServer.get('/test', (req, res)=>{
    console.log("the http url '/test' 被触发");

    var str = JSON.stringify({text:"Welcome to NodeHttpServer~"});
    res.end(str);
})

// 注册连接事件和其他事件
io.on('connection', (socket) => {
  console.log('a user connected');
 
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
 
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // 广播消息到所有客户端
    io.emit('chat message', msg);
  });
});

// 监听3000端口
httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});
```

在这个例子中，我们创建了一个HTTP服务器，然后使用socketIO()函数将其转换为支持Socket.io的服务器。
每当有新的客户端连接时，我们都会注册一个事件来处理这个连接。
我们还定义了一个处理聊天消息的事件，并将其广播到所有其他客户端。