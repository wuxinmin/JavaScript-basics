const obj = {
    $: name => document.querySelector(name), // 
    bind: function () {
        this.$(".submit").onclick = () => {
            let [_name, _message] = [this.$(".name").value, this.$(".message").value];
            if (!_name || !_message) return;
            this.submitData(_name, _message);
        }
    },
    submitData: function (_name, _message) {

        getJson("http://127.0.0.1:3000/submit_message", "post", { name: _name, message: _message })
            .then(res => { // 成功
                console.log(res);
                let { code } = res;
                if (code == 200) {
                    this.getData();// 一旦成功就去获取数据 也就是调用另一个请求
                }
            }, function (error) { // 失败
                console.log(error);

            });
    },
    getData: function () {
        getJson("http://127.0.0.1:3000/get_message", "get")
            .then( res => { // 成功
                console.log(res);
                let { code, result } = res;
                if (code == 200) {
                    let str = "";
                    for (let obj of result) {
                        // 模板字符串
                        str += `<li class="list-group-item">${obj.name}
                                    <span>说：</span>${obj.message}
                                </li>`
                    };
                    this.$(".messageList").innerHTML = str;
                }

            }, function (error) { // 失败
                console.log(error);

            });

    },
    showLists: function () {
        // let str = "";
        // for (let [k, v] of this.m) {
        //     // 模板字符串
        //     str += `<li class="list-group-item">${k}
        //                 <span>说：</span>${v}
        //             </li>`
        // };
        // this.$(".messageList").innerHTML = str;
    }
}
window.onload = function () {
    obj.bind();
}