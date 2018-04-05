//定义axios方法，类ajax，实现异步请求
import http from 'axios';
import {Link} from 'react-router';
function MyAxios(option){
    var type ="POST";
    var url = option.url;
    var data = option.data || {};
    http({
        method:type,
        url:url,
        data: data,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    .then(function(res){
        console.log(res);
        if(res.errorCode=='ok'){
            sessionStorage.setItem("token",res.data.token);
            sessionStorage.setItem("userId",res.data.id);
            sessionStorage.setItem("name",res.data.name);

        }else if(res.errorCode == "NEED_LOGIN"){

        }
    })
    .catch(function(error){

    })
}

export default MyAxios;
