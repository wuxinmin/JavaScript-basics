var arr = ["abc", "red", "bule", "green", "pink", "phone", "cloth", "wc", "ok","data", "bat"];  // 列表
var input = "a"; // 输入条件
var select = arr.filter(function(item){ // filter 过滤
    return item.includes(input)
})
console.log(select);

// 没有includes 我们也可以用indexOf来写
var arr = ["abc", "red", "bule", "green", "pink", "phone", "cloth", "wc", "ok","data", "bat"];  // 列表
var input = "a"; // 输入条件
var select = arr.filter(function(item){ // filter 过滤
    return item.indexOf(input) != -1;
})
console.log(select);