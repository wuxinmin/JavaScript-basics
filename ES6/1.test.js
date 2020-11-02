window.onload = function() {

    // var 变量提升
    console.log(a);  //undefined
    var a = 10;
    
    // let 没有变量提升
    console.log(b); // 报错 b is not defined
    let b = 10;
    

    // 不同作用域下不会报错，相同作用域下报错
    let a = 1;
    // let a = 20;  // Identifier 'a' has already been declared
    if(1) {
        let a = 2;
        console.log(a);  // 2 没有报错    
    }

    // let 块及作用域 var 函数作用域

    let a = 1;
    if(true) {
        let a = 2;
        console.log(a);  // 1 块级作用域
    }

    function fun(i) {
        let i =10
        console.log(i); // 报错
    }
    fun(100);

    //块级作用域的重要性
    for(var i = 0; i < 5; i++) {}
    console.log(i); // 5

    for(let i = 0; i < 5; i++){
        console.log(i); // 0 1 2 3 4       
    }

    // 暂时性死区
    function fun(i) {
        let i =10
        console.log(i); // 报错
    }
    fun(100);


    function fun() {
        let a = 10;
        if(true) {
            a = 20; 
            console.log(a);
            let a; //报错
        };
        console.log(a); // 10
    }

    let a = b; b = 100;  // a = b； b没有啊
    function f() {
        console.log(a,b);  //报错
    }
    f();

}