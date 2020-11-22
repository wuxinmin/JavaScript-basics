window.onload = function() {
    




    // 并行
    // all 等待所有的都执行完了才输出
    var p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("p1");
        }, 1000)
    });
    var p2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("p2");
        }, 5000)
    })         
    Promise.all([p1, p2]).then(([d1, d2])=>{
        console.log(d1, d2);        
    })
    // 等待5s 输出 p1 p2

    // race 只要执行完一个就输出
    var p3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('p3');
        }, 1000);
    })
    var p4 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('p4');
        }, 5000);
    })
    Promise.race([p3, p4]).then(d=>{
        console.log(d);        
    })
    // 1s 后输出p3 结束
}