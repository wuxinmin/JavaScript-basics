http://css.doyoe.com/ 参考手册
# 选择器
## 元素选择符
## 关系选择器
    E F（包含选择符）        选择所有被E元素包含的F元素
    E>F（子选择符）          选择所有作为E元素的子元素F
    E+F（相邻选择符）        选择紧贴在E元素之后F元素
    E~F(css3)（兄弟选择符）  选择E元素所有兄弟元素F
## 属性选择器
## 伪类选择器
超链接的4种状态：
    a:link{}    没有被点击
    a:visted{}  点击之后   
    a:hover{}   鼠标划入
    a:active{}  正在点击还没有松手

    focus  获取焦点
## 伪对象选择器

# 文字字体相关的属性
文字阴影：text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5); 水平偏移 垂直偏移 模糊度 颜色
溢出隐藏：
    /* 单行文本溢出隐藏 */
    overflow: hidden;
    /* 文本溢出显示省略号 */
    text-overflow: ellipsis;
    /* 不换行 */
    white-space: nowrap;
设置字体：font-face

# 颜色
rgba

# 边框
    /* 边框阴影 */
    box-shadow: 8px 6px 5px 2px #ceab0f;
    /*水平偏移 垂直偏移 模糊度 外延值 颜色*/
# 背景（重要）
    背景原点：background-origin 
    背景裁切：background-clip
    @背景大小：background-size: 100px 200px | 50% 20%
                                cover (覆盖) 
                                contain (包含)                   
    多背景：  multiple backgrounds

# 弹性盒模型
    flex
    flex-direction 控制方向 水平 垂直
    align-items    控制垂直方向的对齐方式    
    flex-wrap      控制示符换行

## 如何触发一个盒子的bfc
1.position: absolute;
2.display: inline-block;
3.float: left/right;
4.overflow: hidden; （溢出部分隐藏）


# 过渡 2D/3D变换和动画
transform的旋转位移和缩放
     沿着中心点旋转 正值会沿着顺时针旋转 负值就会沿着逆时针旋转 
         旋转2D 
         transform: rotate(30deg); 
         3D旋转 
         x轴旋转
         transform: rotateX(45deg); 
         Y轴旋转 
         transform: rotateY(40deg); 
         Z轴旋转 
         transform: rotateZ(40deg); 
         transform: translateZ(-100px); 
         缩放 
         transform: scale(0.5);
         扭曲 
         transform: skew(40deg);
transform-origin: 0 0; 设置原点

## 过渡 动画
        过渡 transition  需要有触发条件
         /* 过渡 */ /* 属性 时间 运动方式 延迟时间 */
        transition:   width  2s  linear    1s;