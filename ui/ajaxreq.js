
//counter code
var btnClick=document.getElementById("btnClick");
var counter =0;
btnClick.onclick=function(){
    //Make a request to the counter endpoint
    
    
    //Capture the response and store in a variable
    //Render the variable in the correct span
    counter=counter+1;
    var count=document.getElementById("count");
    count.innerHTML =counter.toString();
};
