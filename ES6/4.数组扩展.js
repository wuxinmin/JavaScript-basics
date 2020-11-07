window.onload = function () {
    // 数组参数序列 ...arr
    var arr = [1, 2, 3];
    var str = { ...arr }
    console.log(str);

    // 1.*一组值转数组 Array.of()
    Array.of();             // []
    Array.of(1);            // [1]
    Array.of(1, 2, 3);      // [1, 2, 3]
    Array.of(4).length;   // 2

    // 2.copyWithin()
    // 定义：将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组（会修改当前数组）
    // 接收三个参数 copyWithin(target, start, end)
    // target(必须) 从该位置开始替换数据。如果为负值，表示倒数
    // start(可选) 从该位置开始读取，默认为0.如果为负值，表示从末尾开始计算。
    // end (可选) 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
    [1, 2, 3, 4, 5].copyWithin(0, 3); // 45345
    [1, 2, 3, 4, 5].copyWithin(0, 3, 4); // 42345

    // 3.*find  注意 找出第一个符合条件的值
    // find() 用于找出第一个符合条件的数组成员。找出来就返回值为true的成员 如果没有成员符合条件则返回undefined
    // 接收三个参数 一次为当前的值，当前值的位置和原数组
    var arr = [3, 4, 7, 9];
    var a = arr.find(function (item, index, arr) {
        // 用于找出第一个符合条件的数组成员
        return item > 5;
    })
    console.log(a); // 7

    // 另一种写法
    [1, 11, 7, 8].find(n => n > 5) // 11

    // 4.*findIndex 和find一样 只不过他返回的是 索引值

    // 5.*fill()
    // 定义： 用于将一个固定的值替换数组的元素

    //        要填充的值 开始填充位置 停止填充位置 默认为length
    // array.fill(value, start, end)  与copyWithin有点类似
    var arr = ["Orange", "red", "45", "green"];
    arr.find("abc", 2, 4); // ["Orange", "red", "abc", "abc"]

    // 6.*includes()
    // 定义：方法返回一个布尔值，表示，某个数组是包含给定的值，与字符串includes方法类似
    [1, 2, 3].includes(2); // true
    [1, 2, 3].includes(4); // false

    // 方法的第二个参数表示搜索的其实位置，如果第二个为负数表示倒数
    [1, 2, 3].includes(3, 3);  // false
    [1, 2, 3].includes(3, -1); // true
    [1, 2, 3].includes(3, -100); // true

    // 7.flat 平的 拉平
    // 定义：用于将整个数组"拉平", 变成一堆数组
    [1, 2, [3, 4, 5], [7, 8]].flat();  // [1, 2, 3, 4, 5, 7, 8]

    [1, 2, [3, 4, 5, [7, 8]]].flat(); // [1, 2, 3, 4, 5, [7, 8]]

    [1, 2, [3, 4, 5, [7, 8]]].flat(2); // [1, 2, 3, 4, 5, 7, 8]

    [1, 2, [3, 4, 5, [7, 8, [9, [10, [11, [12]]]]]]].flat(Infinity); // [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]
}