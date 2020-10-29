// buffer 缓冲器
// const buf1 = Buffer.alloc(10);
// 内存长度为10 ；用零填充的Buffer
// console.log(buf1);

// const buf2 = Buffer.alloc(10,1);
// console.log(buf2);  // 01 01 01 01 01 01 01 01 01 01

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);  // 填写任意数据

// const buf4 = Buffer.from([1,2,3]);
// const buf4 = Buffer.from("test", "utf-8")
// console.log(buf4); // 01 02 03

// base64 进制转换
const buf = Buffer.from('http://www.163.com/1.rmvb', 'ascii');
// console.log(buf);
// console.log(buf.toString('hex'));
console.log(buf.toString('base64')); // aHR0cDovL3d3dy4xNjMuY29tLzEucm12Yg==
// 我们常说的迅雷转换之类的也就是这个意思  通过base64编码来做处理


//node 需要require加载模块   也有自动加载模块

//自动加载模块  global console buffer module process timer 模块

// buffer 处理TCP流和文件交互的时候  http回传数据 会用fs （文件字符串 流）