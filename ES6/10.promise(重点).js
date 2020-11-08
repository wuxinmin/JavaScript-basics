window.onload = function () {
    /* 
      Promise 是异步编程的一种解决方案，让Ajax变得更加优雅，就是一种规则

      Promise有以下两个特点。
      1.对象的状态不受外界影响。promise对象代表一个异步操作，有三种状态：
      pending（进行中）fulfilled（已成功）和 rejected（以失败）。只有
      异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这
      个状态。这也是promise这个名字的由来，“承诺”，表示其他手段无法改变。
      2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。promise对
      象的状态改变，只有两种可能：从pending变为fulfilled和从从pending变
      为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保
      持这个结果，这时就称为resolved（已定型）。如果改变已经发生了，再对
      promise对象添加回调函数，也会立即得到这个结果。这与事件完全不同，
      事件的特点是，如果你错过他，再去监听，是得不到这个结果的。

    */
    // 回调陷阱 / 回调地狱
    $.ajax({
        url: 'url/a',
        data: {},
        type: '',
        success: function (res) {
            var id = res.id;
            $.ajax({
                url: 'url/b/id',
                data: {},
                type: '',
                success: function (res) {
                    var name = res.name;
                    $.ajax({
                        url: 'url/c/name',
                        data: {},
                        type: '',
                        success: function (res) {
                            var lists = res.lists
                        }
                    });
                }
            });
        }
    });
    /* 
      Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
      它们是两个函数，由JavaScript引擎所提供，不用自己部署。
      resolve的作用是，将promise对象的状态从“未完成”变成“成功”（即从pending变为
      fulfilled），在异步操作成功是调用，并将异步操作的结果，作为参数传递出去；reject
      的作用是，将promise对象的状态从“未完成”变为“失败”（即从pending变为rejected）
      在一部操作失败是调用，并将异步操作报出错误，作为参数传递出去。
      Promise实例生成以后，可以空then方法分别在指定resolved状态和rejected状态的回调函数。
    
      then方法可以接受两个回调函数作为参数，第一个回调参数是Promise对象的状态变为resolve
      时调用，第二个回调函数时promise对象的状态变为rejected时调用。其中，第二个函数时可选
      的，不一定要提供。这两个都接受promise对象传出的值作为参数。
    
    
    */
    // promise基本写法
    // promise对象是一个构造函数，用来生成Promise实例
    var p = new Promise(function (resolve, reject) { // resolve, reject异步操作的结果传递出去
        if (true) { //
            resolve("ok");
        } else {
            reject("失败");
        }
    })
    p.then(function (data) {
        console.log(data); // ok   成功的状态   
    }, function (data) {
        console.log(data); //      失败的状态
    })

    // **链式写法
    var p = new Promise(function (resolve, reject) { // resolve, reject异步操作的结果传递出去
        if (true) { //
            resolve("ok");
        } else {
            reject("失败");
        }
    });
    p.then(function (data) {
        console.log(data); // ok   成功的状态   
        return new Promise(function (resolve, reject) { // 成功之后继续发送第二个
            if (false) { //
                resolve("ok");
            } else {
                reject("失败");
            }
        });
    }, function (data) {
        console.log(data); //      失败的状态
    })
    .then(function (a){
        console.log(a);  
    }, function(a) {
        console.log(a); // 失败
    })


}