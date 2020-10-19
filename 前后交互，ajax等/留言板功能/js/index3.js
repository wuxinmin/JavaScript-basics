window.onload = function(){
    //选择器封装
    var $ = function(name){
        return document.querySelector(name)
    };
    var _http = Http();
    //提交信息
    $(".submit").onclick=function(){
        var _name = $(".name").value,
            _message = $(".message").value;
        if(!_name || !_message) {
            alert('请输入信息')
        }else {
            var data = JSON.stringify({name:_name,message:_message});
            _http.request('POST','/data/add',data,
                function(res){
                    console.log(res)
                },function(){

                })
        }
    };
    //查询信息
    $(".query").onclick=function(){
        list();
    }
    function list (){
        _http.request('GET','/data/query',null,
            function(res){
                console.log(res);
                //把拿到的数据展示
               var data = JSON.parse(res);
               var str = '';
               for(var i = 0 ;i<data.length;i++){
                   str += '<li class="list-group-item">'+data[i].name+
                       '<span>说：</span>'+data[i].message+
                        '</li>'
               }
               $(".messageList").innerHTML = str;
            },function(){

            })
    }
    
}