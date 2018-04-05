// 自定义运动框架！
function animate(obj,attr,target)  {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var current = parseInt(getStyle(obj,attr));
        var step = ( target -current ) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style[attr] =  current  + step + "px";
        if(current == target )
        {
            clearInterval(obj.timer);
        }
        //console.log(current);
    } ,30)
}
function getStyle(obj,attr) {
    if(obj.currentStyle)  // ie 等
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
    }
}

export default animate;