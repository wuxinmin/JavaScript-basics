window.onload = function () {
    var vm = new Vue({
        el: '#my',   //element
        data: {   //数据
            items: [
                { name: '陈奕迅', id: 1, qq: '12345678', state: false },
                { name: '李荣浩', id: 2, qq: '12345678', state: false },
                { name: '毛不易', id: 3, qq: '12345678', state: false },
                { name: '简弘亦', id: 4, qq: '24325324364', state: false },
                { name: '于文文', id: 5, qq: '242424', state: false },
                { name: '火简少女101', id: 6, qq: '2324324324', state: false },
                { name: 'TFBOYS', id: 7, qq: '54523242', state: false },
                { name: 'BEYOND', id: 8, qq: '23435346', state: false },
                { name: '华晨宇', id: 9, qq: '4242342534', state: false },
                { name: 'BIGBANG', id: 10, qq: '4322432423', state: false },
                { name: 'DAISHI DANCE', id: 11, qq: '243432432', state: false },
                { name: '李哈哈', id: 12, qq: '3244322432', state: false },
                { name: '周笔畅', id: 13, qq: '5352324532', state: false },
                { name: '张碧晨', id: 14, qq: '4324324324224', state: false },
                { name: '广东雨神', id: 15, qq: '4324324324', state: false }
            ],
            selectItems: [],
            // 此处注意不要直接true false 会与i中的 0 1 冲突出现bug
            flag: "false"
        },
        methods: {   //方法
            addItem(item) {
                item.state = true;
                // 此时出现问题，会发生重复，所以需要进去重
                // 方法一  这里不能用foreach 它没有返回值
                /* for(var i = 0; i < this.selectItems.length; i++){
                    if(item.id == this.selectItems[i].id) return
                } */
                //方法二
                // var s = this.selectItems.filter((value,index) => {
                //     return value.id == item.id
                // })
                // if(s.length > 0) return;
                this.selectItems.push(item);

                // 方法三 数组去重  其实new set只针对与数组不支持数组对象但是vue底层对内存的指针进行处理所以此处可以使用
                this.selectItems = [...new Set(this.selectItems)]
            },
            delItem(v, i) {
                this.selectItems.splice(i,1);
                // 解决删除后红色取消
                this.items.forEach(item=>{
                    if(item.id == v.id) {
                        item.state = false;
                    }
                })
               
            }
        },
    })
}