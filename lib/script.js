root = document.documentElement;
var deg = 0;
setInterval(function(){
    if(deg >= 360) deg = 0;
    deg++;
    root.style.setProperty('--deg', deg + 'deg');
},100);