
//counter code
var btnClick=document.getElementById("btnClick");
var counter =0;
btnClick.onclick=function(){
    //Make a request to the counter endpoint
    var request=new XMLHttpRequest();
    console.log('button clicked');
    
    //Capture the response and store in a variable
    request.onreadystatechange=function(){
        if (request.readyState === XMLHttpRequest.Done)
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
   
};
