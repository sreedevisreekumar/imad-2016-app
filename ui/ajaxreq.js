
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

var submitName=document.getElementById("SubName");
submitName.onclick=function(){
    //Make a request to the server and send the name
    var request=new XMLHttpRequest();
     var nameInp=document.getElementById("name");
     var nameVal=nameInp.value;
    request.open('GET','http://sreedevisreekumar.imad.hasura-app.io/submit-name?name='+nameVal,true);
    request.send(null);
   
    //Capture a list of names and render it as a list
    request.onreadystatechange =function(){
        if(request.readyState ===XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200)
            {
                //capturing
                  var names=request.responseText;
                  names=JSON.parse(names);
                  var list='';
                for(var i=0;i<names.length;i++)
                {
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
    
  
};