window.onload = function () {
    new Vue({
        el: "#my",  // element 元素 挂载元素
        data: {  // 响应式数据   改变data中的值的变化页面就会发生变化 这就是双向数据绑定
            name: "",  // 只要这个值发生变化 页面引入了对应的值就会发生变化
            n: 0,          // 初始化，默认值
            // 注意：data里面不支持function  针对与数据的处理
            title: ["标题一", "标题二", "标题三", "标题四", "标题五", "标题六", "标题七"],
            content: ["内容1", "内容2", "内容3", "内容4", "内容5", "内容6", "内容7", "内容8"],
            obj: [
                { title: "标题1", content: "内容1" },
                { title: "标题2", content: "内容2" },
                { title: "标题3", content: "内容3" },
                { title: "标题4", content: "内容4" },
                { title: "标题5", content: "内容5" },
                { title: "标题6", content: "内容6" },
            ],
            list: []
        },
        methods: {  // 可以理解为管理各大函数的，里面会定制各种方法
            action(x) { // 可以这样写
                // var name = "xyz" // 他不会引起页面的变化 页面变化这针对data
                // this.$data.n = x;  简写下面
                this.n = x;
            },

            // 利用请求的数据应该怎样操作呢
            getData: function () { // 也可以这样写
                var self = this;
                axios({
                    methods: "get",
                    url: "http://127.0.0.1:3000/get_tab",

                }).then(function (res) {
                    console.log(res);
                    // 注意this指向此时this指向的是window  解决办法 1.提前定义 2 箭头函数  3 如果new实例的时候就用 var vm 后续直接vm就可以
                    self.list = res.data.result;
                }).catch(function (error) {

                })
            }
        },
        mounted: function () { // 生命周期 挂载完成
            this.getData();
        }
    })
}