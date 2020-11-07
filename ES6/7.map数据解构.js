window.onload = function () {
    // map 类似于Object  键值对
    var m = new Map();

    // 1.添加方式
    //map添加值 set 要和set数据解构区分开两就没有关系
    m.set("key", "value");
    m.set("count", 10).set("前端", "javascript");

    var o = {id: 10};
    m.set(o, "abc");   

    // 另外一种添加方式
    let m1 = new Map([["a", 1], ["b", 2], ["c", 3]]);

    //2. size属性
    // 返回Map结构的成员总数
    const m = new Map();
    m.set("a", "a").set("b", "b");
    m.size; // 2

    // 3.get获取
    const m = new Map();
    m.set("a", "a").set("b", "b");
    m.get("a"); // "a"

    // 4.has是否拥有
    var m = new Map();
    m.set("count", 10).set("前端", "javascript");
    m.has("前端");   

    // 5.delete 删除某个键，返回ture 如果删除失败返回false
    var m = new Map();
    var a = {id: 2};
    m.set(a, "value");
    m.set("name", "jingdu");

    m.delete("name");
    m.has("name"); // false


    // 6.clear() 清除所有成员，没有返回值。
    const m = new Map();
    var a = {id: 2};
    m.set(a, "value");
    m.set("name", "jingdu");

    m.clear();
    m.has(a); // false

    // 7.*Map遍历方法
    let m1 = new Map([["a", 1],["b", 2],["c", 3],["d", 4]]);

    /* for(let [key, value] of m1) {
        console.log(key);
        console.log(value);   
    } */
    //keys()键 values()值 entries()键值
    for(let key of m1.keys()) { // 只拿到键
        console.log(key);  
    }
    for(let value of m1.values()) { // 只拿到值
        console.log(value);  
    }

    // map类型转换

    // 1.对象转数组
    var obj = {
        "a" : 1,
        "b" : 2,
        "c" : 3
    }
    Object.keys(obj); // ["a", "b", "c"]  键
    Object.values(obj); // [1, 2, 3]  值
    Object.entries(obj); //[["a", 1],["b", 2],["c", 3]]

    // 2.那么map类型转数组怎么转？？
    let m1 = new Map([["a", 1],["b", 2],["c", 3],["d", 4]]);
    [...m1.keys()]; // ["a", "b", "c", "d"]
    [...m1.values()]; // [1, 2, 3, 4]
    [...m1.entries()]; // [["a", 1],["b", 2],["c", 3],["d", 4]]
    [...m1]; // [["a", 1],["b", 2],["c", 3],["d", 4]]

    // 3.Map类型转对象（Object）
    let m2 = new Map([["a", 1],["b", 2],["c", 3],["d", 4]]);
    let o2 = {};
    for(let [key, value] of m2) { //这里的[]就类似于解构
        o2[key] = value;  // 键值同时给予   
    }
    console.log(o2); // {a: 1, b: 2, c: 3, d: 4}

    // 4. object对象Map对象？
    //第一种方式
    var obj = {a: 1, b: 2, c: 3, d: 4}

    let m3 = new Map();
    for(let key in obj){
        m3.set(key,obj[key]);
    }
    console.log(m3); // Map(4) {"a" => 1, "b" => 2, "c" => 3, "d" => 4}

    // 第二种方式
    var obj = {a: 1, b: 2, c: 3, d: 4}
    let m4 = new Map(Object.entries(obj)); //Object.entries(obj)其实就是转为数组
    
}