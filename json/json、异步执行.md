# json
xml与json
xml比较随性他可以自定义标签
html是别人定义好拿出来用

json往数据库传值：JSON.stringify()  需要把对象形势的转化为json格式的字符串格式
json接收数据库值：JSON.parse()  需要把json格式的字符串形势转化为对象格式

注意深度优先原则 

dom树：
看见一个标签就直接挂到dom树上，dom树节点解析完毕比不代表加载也完毕

css树：与dom树相对应

他们两个一合并就会形成 randerTree  之后渲染引擎才会绘制页面
所以当改变dom树的时候就需要重新生成一个randerTree就需要重构是特别影响效率

reflow  重排  dom节点的删除、添加
              dom节点的宽高变化、位置变化
repaint 重绘（他相对于重排影响就很小了）
