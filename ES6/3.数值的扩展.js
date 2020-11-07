window.onload = function () {
    // 1.parseInt()          函数可解析一个字符串，并返回一个整数
    // es5 parseInt  es6 Number.parseInt() es5和es6写法不同
    parseInt("11ds") // 11
    Number.parseInt("11ds11") //11

    // 2.parseFloat()        函数可解析一个字符串，并返回一个浮点数
    // 3.Number.isInteger()  用来判断一个数值是否为整数
    // es6方法
    Number.isInteger(11.1) // false
    // 4.Math.ceil()         返回大于或等于一个给定数字的最小整数
    Math.ceil(11.12);   //  12 向上取整 天花板
    Math.ceil(-11.12);  //  -11 向上取整
    // 5.Math.floor()        返回大于或等于一个给定数字的最大整数
    Math.floor(11.2);   //  11 向下取整 地板
    Math.floor(-11.2);  //  -12  
    // 6.Math.round()        返回一个数字四舍五入后最接近的整数
    // 7.Math.trunc()        用于去除一个数的小数部分，返回整数部分
    Math.trunc(11.999); // 11
    // 8.Math.sign()         方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转化为数值
    // 正数     返回 +1
    // 负数     返回 -1
    // 0        返回 0
    // -0       返回 -0
    // 其他值   返回 NaN
}