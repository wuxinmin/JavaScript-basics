// 通过可读流 和 可写流的方式
const fs = require("fs");

const rs = fs.createReadStream("./demo.txt");  // 文件读取流
const ws = fs.createWriteStream("./sdemo.txt"); // 文件可写流

rs.pipe(ws); // 管道符 把可读流读到的数据直接给可写流 来完成读写操作

// node下的api都是继承自events
/* rs.on("data",function(chunk) {
    console.log(chunk.length); // 最大65535
    ws.write(chunk);
})
rs.on("end",function() {
    console.log('结束了');
    ws.end();
}) */