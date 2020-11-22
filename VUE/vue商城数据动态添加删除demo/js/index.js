window.onload = function () {
    var vm = new Vue({
        el: "#my",
        // data里面就是响应式数据，就是说data中的数据发生变化页面就会发生变化
        data: {
            // 因为里面比较多最好使用数据对象
            lists: [
                {
                    value: "手机",
                    state: "0"
                },
                {
                    value: "IPAN",
                    state: "1"
                }

            ],
            value: "",
            state: ""
        },
        methods: {
            add() {
                // 判断值为空就直接返回，也是防止为空的一种方法 
                if (!this.value) return;
                // 新的东西添加到之前
                this.lists.unshift(
                    {
                        value: this.value,
                        state: this.state
                    }
                );
               /*  vm.lists.push({
                    value: this.value,
                    state: this.state
                }); */

                // 清空处理
                this.value = '',
                this.state = ''
            },
            del(i) {
                vm.lists.splice(i, 1)
            }
        },
        filters: { // 过滤器 文本格式化，后端传过来的值不是用户想看到的
            // 过滤器是一种管道思想
            stateFilter:function (v) {
                /* if(v == '0') {
                    return '未采购'
                }else{
                    return "已采购"
                } */

                // 这种情况下我们用到switch较多
                switch(v) {
                    case '0':
                        return "未采购"
                    case '1':
                        return "已采购" 
                    default:
                        return v
                }
            }
        }
    })
}