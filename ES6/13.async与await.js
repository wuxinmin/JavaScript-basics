window.onload = function () {
    // async await
    // async await 是promise和generator的语法糖
    //async await 是建立在promise机制之上的，并不能取代其地位

    async function f() { //async其实返回的是一个promise对象   
        return 'f'
    }
    f();   // Promise {<resolved>: "f"}
    let f1 = f();
    f1.then(function (res) { // 默认为成功的状态，将async返回的结果当作then的参数
        console.log(res);   // f 拿到返回值"f"

    })



    async function f() { //async其实返回的是一个promise对象   
        return '1234'
    }
    f().then(res=>{
        console.log(res);
    });
    console.log(1);

    //结果：1 1234


    // await
    function f2() {
        console.log(4);
    }
    async function f() {
        console.log(1);
        
        await f2(); // 阻塞f() 的执行 再执行f2() 然后执行同步任务 在执行await后的代码
        console.log(2);
    }
    f();
    console.log(3);
    // 结果：1 4 3 2
}