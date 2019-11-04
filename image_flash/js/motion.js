function move(obj, styleName, target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        curVal = getStyle(obj, styleName);
        if(curVal == target){
            clearInterval(obj.timer);    
        }else{
            speed = (target - curVal)/6;
            if(styleName == 'opacity'){
                speed = speed>0?Math.ceil(speed * 100)/100:Math.floor(speed * 100)/100;
                obj.style[styleName] = curVal + speed;
            }else{
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                obj.style[styleName] = curVal + speed + 'px';
            }
        }
    }, 30)
}

function getStyle(obj, styleName){
    if(styleName == 'opacity'){
        return parseFloat(getComputedStyle(obj)[styleName])
    }else{
        return parseInt(getComputedStyle(obj)[styleName])
    }
}