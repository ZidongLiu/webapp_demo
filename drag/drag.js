function drag(id){
    this.oDiv = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
    var _this = this;
    this.oDiv.onmousedown = function(ev){
        _this.mouseDown(ev);
        return false;
    }
}

drag.prototype.mouseDown = function (ev){
    event = ev || event;
    this.disX = this.oDiv.offsetLeft - event.clientX;
    this.disY = this.oDiv.offsetTop - event.clientY;
    var _this = this;
    document.onmousemove = function(ev){_this.mouseMove(ev);}
    document.onmouseup = function(ev){_this.mouseUp(ev);}
}

drag.prototype.mouseMove = function(ev){
    event = ev || event;
    this.oDiv.style.left = event.clientX + this.disX + 'px';
    this.oDiv.style.top = event.clientY + this.disY + 'px';
}

drag.prototype.mouseUp = function (){
    document.onmousemove = null;
    document.onmouseup = null;
}