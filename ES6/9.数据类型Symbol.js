window.onload = function () {
    // ES6引入了一种新的原始数据类型，表示独一无二的值。
    var obj = {id: 1, id: 3, name: "abc", name: "bcd"};
    console.log(obj); // {id: 3, name: "bcd"}
    
    // 声明方式：
    let s1 = Symbol();
    let s2 = Symbol();
    console.log(s1 == s2); // false

    // 查看类型
    typeof s1; // "symbol"    

    let s3 = Symbol("s3");  // 里面有一个参数表示对symbol实例的描述
    let s4 = Symbol("s3"); 
    console.log(s3 == s4); // false
    // 获取描述信息
    s3.description;

    // 注意symbol作为对象的属性名。不能用点运算符
    var id = Symbol();
    var o = {
        id: "1",
        [id]: "999",
    }
    console.log(o);
    // 获取
    o.id // 1
    // 999怎么获取
    o[id] // 999
    o["id"] // 1

    var o2 = {};
    var x = Symbol();
    o2[x] = 111;
    var x = Symbol();
    o2[x] = 222;
    console.log(o2); // {Symbol(): 111, Symbol(): 222}
    // o2[Object.getOwnPropertySymbols(0)[1]] // 222
    console.log(o2[Object.getOwnPropertySymbols(o2)[1]]);
    
    //Symbol.for(); 相当于登记了，在后面添加的任何一个都会把原有的给替代掉
    var o2 = {};
    var x = Symbol.for("x");
    o2[x] = 111;
    var x = Symbol.for("x");
    o2[x] = 222;
    console.log(o2); // {Symbol(): 222}


    // 类型转换


}