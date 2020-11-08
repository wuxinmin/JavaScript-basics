window.onload - function () {
    // Promise 实现Ajax封装
    const getJson = function (url, type, data) {
        const promise = new Promise(function (resolve, reject) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open(type, url);
            if (type == "get") {
                xmlHttp.send(); // 发送
            } else {
                xmlHttp.setRequestHeader('Content-Type', 'application/json');  // 添加头部信息
                xmlHttp.send(JSON.stringify(data));  // 序列化处理
            };
            xmlHttp.responseType = "json";  // 响应的数据类型
            xmlHttp.onreadystatechange = function () {  // 监听状态变化
                if (xmlHttp.readyState !== 4) {
                    return;
                }
                if (xmlHttp.status === 200) {
                    resolve(xmlHttp.response) // 把成功对应的响应返回回去
                } else {
                    reject(new Error(xmlHttp.statusText)); // 返回一些文字描述信息
                }
            }
        })
        return promise;
    }

    // getJson("http://127.0.0.0:3333/get_lists","get").then(function(res) { // 成功

    // },function(res){ // 失败

    // });
}