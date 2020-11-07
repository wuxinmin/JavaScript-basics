window.onload = function () {
    // js数据解构 原本拥有的是 Array Object 之后有添加了(Es6) Set Map

    var arr = new Array();
    var arr1 = [];

    var obj = new Object();
    var obj2 = {};

    var set = new Set();  // 【类似于数组，成员是唯一的  等号匹配方式是去全等
    // 1.添加 add
    set.add(1);
    set.add(2);
    // 链式写法
    set.add(3).add(4).add(5).add(6);

    // 另一种定义方式
    var set = new Set([3, 4, 5, 6, 7, 7, 7, 8]);
    console.log(set); // {3,4,5,6,7,8} 

    // 2.删除 delete
    const set = new Set();
    set.add(1).add(2).add(3).add(4);
    set.delete(2); // 返回true 剩下 124

    // 3.has 返回一个布尔值，表示该值是否为Set成员
    const set = new Set([1, 2, 3, 4, 5, 6]);
    set.has(3);  // ture

    // 4.size属性 返回set解构的成员总数
    const set = new Set([1, 2, 3, 4, 5, 6]);
    set.size; // 6

    // 5.数组去重
    var arr3 = [1, 2, 3, 1, 1, 2, 2, 5, 8, 9, 7];
    // var obj = new Set(arr3);
    // console.log(obj); // {1, 2, 3, 5, 8, 9, 7}
    // var newArray = [...obj]; // 扩展运算符
    // console.log(newArray); // [1, 2, 3, 5, 8, 9, 7]

    // 类型转换
    // 1. ...扩展运算符
    var newArray = [...new Set(arr3)];  // [1, 2, 3, 5, 8, 9, 7]

    // 2.Array from()
    var arr5 = Array.from(new Set(arr3)); // [1, 2, 3, 5, 8, 9, 7]

    // 6.求出大于5的数据且去重
    var arr = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 11];
    var newArray = [...new Set(arr.filter(item => item > 5))]
    console.log(newArray); // [6, 7, 8, 9, 10, 11]
    
    // 7.并集交及 差集
    // 并集
    var a1 = [1, 2, 3, 4, 5, 6, 4, 5, 6];
    var a2 = [4, 5, 6, 7, 8, 9, 7, 8, 9];
    var unionSet  = [...new Set([...a1, ...a2])];
    console.log(unionSet);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // 交集
    var a1 = [1, 2, 3, 4, 5, 6, 4, 5, 6];
    var a2 = [4, 5, 6, 7, 8, 9, 7, 8, 9];
    // 去重（隐藏类型转换）
    // var s3 = new Set(a1)
    // 去重
    // var a4 = [...new Set(a2)];
    // 求交集把有的给拿出来
    // var a5 = [...new Set(a2)].filter(function(x, y) {
    //         return new Set(a1).has(x);
    //     });
    var intersection  = [...new Set(a2)].filter(function(x, y) {
        return new Set(a1).has(x);
    });
    console.log(intersection ); // [4, 5, 6]
    
    // 差集
    var a1 = [1, 2, 3, 4, 5, 6, 4, 5, 6];
    var a2 = [4, 5, 6, 7, 8, 9, 7, 8, 9];
    // a1a2合并去重 也就是并集
    // var a3 = [...new Set([...a1, ...a2])];
    // 这就是交集 的值 
    var s1 = new Set([...new Set(a2)].filter(function(x, y) {
        return new Set(a1).has(x);
    }));

    // 把不同的取出来就是差集
    var differenceSet = [...new Set([...a1, ...a2])].filter(function(item, index) {
        return !s1.has(item);
    })
    console.log(differenceSet); // [1, 2, 3, 7, 8, 9]
    

    // 8. set遍历的方法
    const set = new Set([2,3,4,5,6,7,9]);
    for(let v of set){
        console.log(v);
    }
    set.forEach((item, index) => {
        console.log(item);
    })
}