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
    // 这里传值 e 系统会帮忙传一个 事件对象，这个事件对象会记载事件发生时的关键信息，以供我们使用
    if (e && e.stopPropagation) {//非IE
        e.stopPropagation(); // w3c 标准
    }
    else {//IE
        window.event.cancelBubble = true;
    }
}

//阻止默认事件
function cancelHandler(e) {
    if (e && e.preventDefault) {
        e.preventDefault(); // w3c标准
    } else {
        window.event.returnValue = false; // IE的  谷歌实现了
    }
}

//封装一个函数 addEvent就是给一个dom对象添加一个该事件类型的处理函数
function addEvent(elem, type, handle) {  //元素 ， 类型， 处理函数
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false)
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;  //[] 与 .
    }
}

//封装一个鼠标拖拽的方法
function drag(elem) {
    var disX,
        disY;
    addEvent(elem, 'mousedown', function(e) {
        var event = e || window.event;  //统一事件对象
        disX = e.pageX - parseInt(getStyle(elem, "left"));
        disY = e.pageY - parseInt(getStyle(elem, "top"));
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
        stopBubble(event);
        cancelHandler(event);
    })
    function mouseMove() {
        var event = e || window.event;  //统一事件对象
        elem.style.left = event.pageX - disX + "px";
        elem.style.top = event.pageY - disY + "px";
    }
    function mouseUp() {
        var event = e || window.event;  //统一事件对象
        removeEvent(document, 'mousemove', mouseMove);
        removeEvent(document, 'mouseup', mouseUp)
    }
}