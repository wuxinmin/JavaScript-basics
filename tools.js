// 封装一个方法，求滚动轮滚距离getScrollOffset()的函数，解决多个浏览器 兼容性混乱问题，
function getScrollOffset() {
    if (window.pageXOffset) {  //  0 &&   因为我们用的是chrome浏览器，所以我们可以利用0 &&来让其失效来模拟兼容其他浏览器
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

//封装方法返回浏览器视口尺寸getViewportOffset()
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode == "CSS1Compat") {  //标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        } else if (document.compatMode == "BackCompat") { // 混杂模式/怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        }
    }
}

// 封装函数打印此时是何年何月何日几时几分几秒
var retMyDate = function () {
    var date = new Date()
    var year = date.getFullYear();  //取出何年
    var month = date.getMonth() + 1;  //取出何月 0-11
    var day = date.getDate(); //取出何日
    var hour = date.getHours() //取出何时
    var Mi = date.getMinutes() //取出何分
    var se = date.getSeconds() //取出何秒

    console.log("今天是" + year + "年" + month + "月" + day + "日" + hour + "时" + Mi + "分" + se + "秒")

}

// 封装函数insertAfter功能类似于insertBefore
Element.prototype.insertAfter = function (targetNode, afterNode) {
    var beforeNode = afterNode.nextElementSibling;
    // this.insertBefore(targetNode, beforeNode);

    if (beforeNode == null) {
        this.appendChild(targetNode)
    } else {
        this.insertBefore(targetNode, beforeNode);
    }
}

//封装一个深拷贝函数

//封装兼容性方法 获取元素属性
function getStyle(elem, prop) { //dom元素， 属性
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop]; //[]解决了好多传参的属性
    } else {
        return elem.currentStyle[prop];
    }
}

//阻止事件冒泡
function stopBubble(e) {
    if (e && e.stopPropagation) {//非IE
        e.stopPropagation();
    }
    else {//IE
        window.event.cancelBubble = true;
    }
}