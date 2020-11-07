window.onload = function () {
    var x = "name";
    var obj = {
        [x] : "abc", // 变量
        ["age"] : 20,
        ["get" + x] : "xyz" // 拼接加变量
    }
    console.log(obj); // {name: "abc", age: 20}

    var obj1 = {};
    obj1.id = 1;
    obj1["x"] = "x";
    obj1["set" + "nmae"] = "abc";
    console.log(obj1);  // {id: 1, x: "x", setnmae: "abc"}  

    // 1. 链判断运算符
    // 判断一个对象是否存在
    var obj = {
        o: {
            o1: {
                o2: {
                    o3: "abc"
                }
            }
        }
    }
    obj.o.o1.o2.o3
    // 安全的写法
    // var a = (obj && obj.o && obj.o.o1 && obj.o.o1.o2 && obj.o.o1.o2.o3) || 1;
    // var a = obj ?. o ?. o1 ?. o2 ?.o3 || 1;  现阶段浏览器不是很支持

    let obj3 = {
        id: 1,
        name: "abc",
        getName: function() {
            return this.name;
        }
    };
   /*  if(obj3.getName()) {
        console.log(1);
    }else{
        console.log(2);
    } */

    // 相当于
    if(obj3?.getName()) {
        console.log(1);
    }else{
        console.log(2);
    }
} 