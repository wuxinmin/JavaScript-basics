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
            axios({
                method:'post',
                url:'http://localhost:3000/data/add',
                data:{name:_name,message:_message}
            }).then(function(res){
                list();
            }).catch(function(){

            })
        }
    };
    //查询信息
    $(".query").onclick=function(){
        list();
    }
    function list (){
        axios({
            method:'get',
            url:'http://localhost:3000/data/query'
        }).then(function(res){
            var data = res.data;
               var str = '';
               for(var i = 0 ;i<data.length;i++){
                   str += '<li class="list-group-item">'+data[i].name+
                       '<span>说：</span>'+data[i].message+
                        '</li>'
               }
               $(".messageList").innerHTML = str;
        }).catch(function(){

        })
        
    }
    
}