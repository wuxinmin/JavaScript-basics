window.onload = function () {
    // for...of 与 for...in
    const arr = ["red", "green", "blue"];
    // es6
    for(let v of arr) {
        console.log(v); // 拿到的是值 
    }
    // 那如果我们需要键值呢？？？
    for(let [i, v] of arr.entries()){
        console.log(i); //索引
        console.log(v); //值
    }
    // es6
    for(let k in arr){
        console.log(k); // 拿到的是索引
        console.log(arr[k]); // 拿到值
        
    }

    // forEach es6
    // 注意点：forEach没有返回值不能用 continue break return
    arr.forEach(function (item, index) {
        console.log(item);
        console.log(index);
    })


    // 注意注意：对象里面就没有遍历器，不能用for...of
    // 解决办法
    var obj = {"a":1, "b": 2, "c":3};
    for(let k of Object.keys(obj)){
        console.log(k);
    }
    for(let [k, v] of Object.entries(obj)){
        console.log(k);
        console.log(v); 
    }

    // 但是for..of就可以用  continue break return
    var arr = [2, 3, 4, 5, 6];
    for(let v of arr){
        if(v == 1){
            // break; // 2
            continue // 2,4,5,6
        }
    }
}