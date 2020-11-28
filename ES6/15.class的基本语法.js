window.onload = function () {
    // es5
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return this.x
    }
    var p = new Point(2, 4);
    p.x
    p.toString();


    class Point {
        constructor (x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return this.x
        }
    }
    // 实例化处理
    var p2 = new Point(2, 4);
    p2.x
    p2.toString();


    // 类继承
    class A {
        constructor() {
            this.a = "a";

        }
    }

    class B extends A { // extends继承 B 继承 A类所有的属性方法
        constructor() {
            super(); // 不屑super关键子就会报错  表示父类的构造函数
            this.b = "b";
        }
    }
    var a = new A();
    var b = new B();
    b.a




        // 扩展
        class A {
            constructor (x, y) {
                this.x = x;
                this.y = y;
            }
            toString() {
                return this.x
            }
        };
    
        class B extends A { // extends继承 B 继承 A类所有的属性方法
            constructor(x, y) {
                super(x, y); // 不屑super关键子就会报错  表示父类的构造函数
                this.b = "b";
            }
        }
        //var a = new A("111", "222");   // 必须要传值
        // a.x
        var b = new B("333", "444");  // 不传值怎么拿得到
        b.x
}