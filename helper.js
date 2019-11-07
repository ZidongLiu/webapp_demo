function move(obj, targetJson, endFn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var allTargetReached = true;
        for(var styleName in targetJson){
            var styleTarget = targetJson[styleName];
            var styleCurVal = getStyle(obj, styleName);
            if(styleCurVal !== styleTarget){
                allTargetReached = false;
                speed = (styleTarget - styleCurVal)/6;
                if(styleName == 'opacity'){
                    speed = speed>0?Math.ceil(speed * 100)/100:Math.floor(speed * 100)/100;
                    obj.style[styleName] = styleCurVal + speed;
                }else{
                    speed = speed>0?Math.ceil(speed):Math.floor(speed);
                    obj.style[styleName] = styleCurVal + speed + 'px';
                }
            }
        }
        if(allTargetReached){
            clearInterval(obj.timer);
            if(endFn){
                endFn();
            };            
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

function setStyle(obj, styleJson){
    for(var styleName in styleJson){
        obj.style[styleName] = styleJson[styleName];
    }
}