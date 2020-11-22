window.onload=function(){
    new Vue({
        el:'#my',  //element 元素
        data:{   //数据
            // 第一种方法中是添加了flag的值，循环遍历会出现一个索引 我们利用索引来做
            n:1,
            items:[
                {name:'衣服',icon:'icon-yonghu',
                    subItems:[
                        {name:'衣服1'},
                        {name:'衣服2'},
                        {name:'衣服3'},
                    ]
                },
                {name:'包包',icon:'icon-licai',
                    subItems:[
                        {name:'包包1'},
                        {name:'包包2'},
                        {name:'包包3'},
                    ]
                },
                {name:'化妆品',icon:'icon-jia',
                    subItems:[
                        {name:'化妆品1'},
                        {name:'化妆品2'},
                        {name:'化妆品3'},
                    ]
                }
            ]
        }
    })
}