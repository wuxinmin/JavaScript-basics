//操作文件 fs 模块 包括同步和异步

//node 事件循环 异步回调 异步编程可以很好的 （处理高并发） 每启动一个process就需要内存2M
var fs = require("fs");

// fs同步读取一个文件的内容
// 同步 会产生阻塞 等待执行
/* var data = fs.readFileSync("./demo.txt", "utf-8");
console.log(data); // 显示计算机所能读取的样式16进制  所以需要在上面需要转化 utf-8
console.log("end"); */

//fs异步读取一个文件内容
var data = fs.readFile("./demo.txt","utf-8",function(err, data) {
    // err 无文件 坏道  读取超时。。。
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
console.log("end");  // 同步代码执行完毕 当前进程空闲
