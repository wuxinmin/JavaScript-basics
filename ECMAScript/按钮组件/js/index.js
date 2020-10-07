window.onload = function() {
    //动态添加
    // common.chooser("#id").innerHTML = '<button class="btn btn-red">按钮</button>'

    //字面量方式
    // common.chooser("#id1").innerHTML = common.toBtn("blue", "按钮")
    // common.chooser("#id2").innerHTML = common.toBtn("green", "按钮")

    //原型继承  可以放入公共组件
    // function Btn(title, style) {
    //     this.title = title;
    //     this.style = style;
    // }
    // Btn.prototype.toHtml = function() {
    //     return '<button class="btn btn-'+this.style+'">'+this.title+'</button>'
    // }
    // var red = new Btn("关闭按钮", "red");
    // var green = new Btn("开启按钮", "green")
    // common.chooser("#id1").innerHTML = red.toHtml();
    // common.chooser("#id2").innerHTML = green.toHtml();

    // 公共传参
    function Btn(btn) {
        this.title = btn.getAttribute("title");
        this.style = btn.getAttribute("color");
    }
    Btn.prototype.toHtml = function() {
        return '<button class="btn btn-'+this.style+'">'+this.title+'</button>'
    }
    var btn = common.chooser("#id1");
    btn.innerHTML = new Btn(btn).toHtml();
}