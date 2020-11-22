window.onload = function() {
    // 微任务与宏任务

    // 在执行宏任务的过程中宏任务会等待微任务执行完毕之后在执行宏任务。
    // 宏任务（队列） setTimeout setInterval
    // 微任务（队列） Promise中的then async await

    // Promise是同步还是异步？？？
    // Promise是同步，他是用来解决Ajax异步回调陷阱的

    console.log(1);
    let a = new this.Promise((resolve, reject)=>{
        console.log(2);
    })
    console.log(3);
    let b = new this.Promise((resolve, reject)=>{
        console.log(4);
    })
    console.log(5);
    
    // 结果： 1 2 3 4 5 所以promise是同步  不是异步


    let a = new Promise((resolve, reject)=>{ // 同步
        console.log(1);
        res(3);
    })
    a.then((res)=>{
        console.log(res);
    })
    console.log(2);
    // 结果：1，2，3  then异步执行
    
}