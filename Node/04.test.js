var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer(function(req,res) {
    // 1.完成文件路径
    // var indexpath = __dirname+"/demo.html"
    // console.log(indexpath);
    // console.log(url.parse("demo.js").pathname); // demo.js
    var indexpath = __dirname +"/"+ url.parse("demo.txt").pathname;
    // console.log(indexpath); // 完整路径

    //2.将文件加载到内存
    var indexData = fs.readFileSync(indexpath, "utf-8");
    // console.log(indexData);
    
    //3.把内存中的数据形成数据包返回
    res.writeHead(200, {"Content-type":"text/html"})
    res.end(indexData); // 打成数据包并截包
}).listen(3000);
console.log("server start port 3000");
