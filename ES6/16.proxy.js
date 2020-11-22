window.onload = function () {
    // Proxy 代理 拦截
    var p = new Proxy(target, handler);
    // 生成p实例  target 表示所拦截的目标对象，handler用来制定拦截行为



    var target = {};  // target   表示所要拦截的目标对象
    var handler = {};  // handler 表示用来定制拦截方法
    var p = new Proxy(target, handler);
    // handler 是一个空对象，没有任何拦截行为，访问p就等同于访问target


    var target = { // target   表示所要拦截的目标对象
        name: "zs"
    };
    var handler = { // handler 表示用来定制拦截方法 
        // get:(target, propKey, receiver);  // 拦截获取某个值
        // 第一个参数表示拦截目标 第二个参数表示键  第三个参数相当于实例本身 可有可无
        get: (target, key) => {
            return "tom"
        }
    };
    var p = new Proxy(target, handler);
    p.name   // tom  拦截它的键 


    var target = {
        name: "jindu"
    };
    var handler = {
        get: function (target, key) {
            console.log(`${key}被读取`);
            return target[key];
        },
        set: function (target, key, value) {
            console.log(`${key}被设置为 ${value}`);
            target[key] = value;
        }
    }
    var a = new Proxy(target, handler);
    a.name; // 输出：name被读取
    a.name = "abc"; // 输出：name被设置为 abc
    console.log(target.name); // 输出：abc




    // Proxy实现私有变量，想获取赵丽颖，由于添加了拦截获取的只能是18
    var yingbao = {
        name: "赵丽颖",
        _age: 30
    };
    var handler = {
        get: (target, key) => { // get方法三个参数，目标对象，属性名，proxy实例本身（非必须）
            if (key.startsWith("_")) { // 是不是以"_"开头
                return 18
            };
            return target[key];
        },
        set: (target, key, value) => { // set方法四个参数，目标对象，属性名，属性值，proxy实例本身（非必须）
            if(key.startsWith("_")) {
                console.log("age不能修改");
                return 18
            }
            target[key] = value;
        }
    }
    var a2 = new Proxy(yingbao, handler);
    a2._age;    // 获取到的是18
}