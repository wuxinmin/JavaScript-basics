function Http(){
    var xmlhttp = new XMLHttpRequest();
    var _url = "http://localhost:3000";
    return {
        request: function(method,url,data,success,error){
            xmlhttp.open(method,_url+url); 
            if(method == 'GET'){
                xmlhttp.send()
            }else {
                xmlhttp.setRequestHeader("Content-Type","application/json");  //请求头
                xmlhttp.send(data); //发送 get请求不用传参
            }
            xmlhttp.onreadystatechange = function() { //接收数据
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText) 
                    success(xmlhttp.responseText);
                }
            }
        }
    }
}