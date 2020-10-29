var http = require("http"); //require把原生模块加载 同时加载文件形成--> Object

//调用http下的api 在这里面接一个回调函数  既然要创建一个server就要监听listen
http.createServer(function(req, res) { //接chrome浏览器的响应  向chrome请求（req） 给chrome发回响应（res）
    //当响应 http://localhost:3000  返回 数据包含（包头、包体） 包头 必须包含Status Code 和 Content-type

    //res返回响应提供api函数 writeHead
    //    Status Code 和 Content-type
    //按照字符串渲染 默认方式
    // res.writeHead(200, {"Content-type":"text/plain"})
    //按照html方式渲染
    res.writeHead(200, {"Content-type":"text/html"})
    //res提供end api 既可以写包体也可以进行截包
    res.end("<h1>hello world</h1>") 
    // 此时hello world并没有被渲染 浏览器把并没有那么智能必须在包头告诉当前浏览器你所返回的数据是什么样的数据类型他的mime头到底是什么
    //mime？？ 返回值数据浏览器的渲染方式 就是我们Content-type后面的那个值 text/plain 按照字符串渲染 text/html 就会按照html方式渲染
}).listen(3000);

// 为了能看见已经on进去(内存)了我们给一个回显
console.log("server start port 3000");

//告诉浏览器 当前Content-type 请你用 text/html 来进行解析 字符集用utf-8来处理
//<meta http-equiv = "Content-type" content = "text/html;charset=UTF-8">

// GBK GB18030 GB2312 UTF-8 浏览器解码
// ASCII Unicode UTF-8 文件编码  Mysql Monogdb 数据库解码  则会个叫做三码一致 所以大家都采用UTF-8

//http fs buffer stream 模块