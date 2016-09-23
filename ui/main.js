console.log('Loaded!');
window.onload=function(){
var element=document.getElementById("txtdiv");
element.innerHTML="Hello world";
alert(element.innerHTML);
};
var imgMadi=document.getElementById("madi");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    imgMadi.style.marginLeft=marginLeft  + 'px';
}
imgMadi.onclick=function(){
    var interval=setInterval(moveRight,50);
}
