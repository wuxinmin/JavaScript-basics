window.onload = function(){
    //选择器封装
    var $ = function(name){
        return document.querySelector(name)
    };
    var xmlhttp = new XMLHttpRequest();
    //提交信息
    $(".submit").onclick=function(){
        var _name = $(".name").value,
            _message = $(".message").value;
        if(!_name || !_message) {
            alert('请输入信息')
        }else {
            //var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("post", "http://localhost:3000/data/add"); 
            xmlhttp.setRequestHeader("Content-Type","application/json");  //请求头
            xmlhttp.send(JSON.stringify({name:_name,message:_message})); //发送 get请求不用传参
            //xmlhttp.send()
            xmlhttp.onreadystatechange = function() { //接收数据
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText) 
                    list();
                }
            }
        }
    };
    //查询信息
    $(".query").onclick=function(){
        list();
    }
    function list (){
        //var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("get", "http://localhost:3000/data/query"); 
        //xmlhttp.send(body); //发送 get请求不用传参
        //xmlhttp.setRequestHeader("Content-Type","application/json");  //请求头
        xmlhttp.send()
        xmlhttp.onreadystatechange = function() { //接收数据
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               //把拿到的数据展示
               var data = JSON.parse(xmlhttp.responseText);
               var str = '';
               for(var i = 0 ;i<data.length;i++){
                   str += '<li class="list-group-item">'+data[i].name+
                       '<span>说：</span>'+data[i].message+
                        '</li>'
               }
               $(".messageList").innerHTML = str;
            }
        }
    }
    
}