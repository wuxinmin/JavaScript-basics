window.onload = function () {
    var vm = new Vue({
        el: '#my',   //element
        data: {   //数据
            items: [
                { name: '陈奕迅', id: 1, city: '12345678', state: false },
                { name: '李荣浩', id: 2, city: '12345678', state: false },
                { name: '毛不易', id: 3, city: '12345678', state: true },
                { name: '简弘亦', id: 4, city: '24325324364', state: false },
                { name: '于文文', id: 5, city: '242424', state: false },
                { name: '火简少女101', id: 6, city: '2324324324', state: false },
                { name: 'TFBOYS', id: 7, city: '54523242', state: false },
                { name: 'BEYOND', id: 8, city: '23435346', state: false },
                { name: '华晨宇', id: 9, city: '4242342534', state: false },
                { name: 'BIGBANG', id: 10, city: '4322432423', state: false },
                { name: 'DAISHI DANCE', id: 11, city: '243432432', state: false },
                { name: '李哈哈', id: 12, city: '3244322432', state: false },
                { name: '周笔畅', id: 13, city: '5352324532', state: false },
                { name: '张碧晨', id: 14, city: '4324324324224', state: false },
                { name: '广东雨神', id: 15, city: '4324324324', state: false }
            ],
            checkAll: false
        },
        methods: {   //方法
            changeCheckAll(item) {
                this.items.forEach(v=>{
                    // 此处有一个箭头函数来解决this指向问题
                    v.state = this.checkAll
                    // 这样之后子选项变不了，而且如果子选项打勾打满的话全选项也需要打勾，
                    // 此时我们需要获取子选项的打勾的个数
                })
            },
            changeCheck() {
                // 获取选中的个数
                // 方式一
                var n = this.items.filter(item => item.state).length;
                n == this.items.length? this.checkAll = true:this.checkAll = false;

                // 方式二借助数组方法 every 都满足返回为真 盘算是否都符合要求 都符合返回true 一个不满足九false
                this.checkAll = this.items.every(item => item.state)

            }
        }
    })
}