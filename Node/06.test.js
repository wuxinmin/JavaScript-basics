var http = require("http");
var fs = require("fs");
http.createServer(function(req, res) {
    fs.createReadStream("./demo.txt").pipe(res)  // 直接调用管道符 给网络流res （res是网络流要知道）
}).listen(3000);
console.log("Server start port 3000");
