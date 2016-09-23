console.log('Loaded!');
var imgMadi=document.getElementById("madi");
var marginLeft=0;

window.onload=function(){
var element=document.getElementById("txtdiv");
element.innerHTML="Hello world";
imgMadi.style.marginLeft="0px";
marginLeft=0;
};

function moveRight(){
    marginLeft=marginLeft+10;
    imgMadi.style.marginLeft=marginLeft  + 'px';
    if(marginLeft==1200)
    {
         return false;
    }
}
imgMadi.onclick=function(){
    var interval=setInterval(moveRight,50);
}
