
//counter code
var btnClick=document.getElementById("btnClick");
var counter =0;
btnClick.onclick=function(){
    //Make a request to the counter endpoint
    var request=new XMLHttpRequest();
    console.log('button clicked');
    
    //Capture the response and store in a variable
    request.onreadystatechange=function(){
        if (request.readyState === XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status===200)
            {
                //Render the variable in the correct span
            counter=request.responseText;
             var count=document.getElementById("count");
             count.innerHTML =counter.toString();
            }
        }
    };
    
    
   //Make the request
   request.open('GET','http://sreedevisreekumar.imad.hasura-app.io/counter',true);
   request.send(null);
   console.log(request.readyState);
   
};
//submit name
var nameInp=document.getElementById("name");
var nameVal=nameInp.value;
var submitName=document.getElementById("SubName");
submitName.onclick=function(){
    //Make a request to the server and send the name
    //Capture a list of names and render it as a list
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};