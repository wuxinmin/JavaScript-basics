window.onload = function () {
    new Vue({
        el: '#my',  //element 元素
        data: {   //数据
            items: [
                {
                    name: "衣服", icon: "icon-yonghu", flag: false,
                    subItem: [
                        { name: "衣服1" },
                        { name: "衣服2" },
                        { name: "衣服3" }
                    ]
                },
                {
                    name: "包包", icon: "icon-licai", flag: true,
                    subItem: [
                        { name: "包包1" },
                        { name: "包包2" },
                        { name: "包包3" },
                        { name: "包包4" },
                    ]
                },
                {
                    name: "化妆品", icon: "icon-jia", flag: false,
                    subItem: [
                        { name: "化妆品1" },
                        { name: "化妆品2" },
                        { name: "化妆品3" },
                    ]
                },
            ]
        },
        methods: { 　//方法
            changeFlag (v) {
                // v.flag = !v.flag

                // 点击谁谁就展开
                this.items.forEach(item => {item.flag = false});
                v.flag = true
            }
        }
    })
}