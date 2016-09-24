var submitName=document.getElementById("SubCmt");
submitName.onclick=function(){
    //Make a request to the server and send the name
    var request=new XMLHttpRequest();
     var cmmntInp=document.getElementById("txtComment");
     var cmmntVal=cmmntInp.value;
    request.open('GET','http://sreedevisreekumar.imad.hasura-app.io/submit-comment?cmnt='+cmmntVal,true);
    request.send(null);
   
    //Capture a list of names and render it as a list
    request.onreadystatechange =function(){
        if(request.readyState ===XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200)
            {
                //capturing
                  var comments=request.responseText;
                  comments=JSON.parse(comments);
                  var list='';
                for(var i=0;i<comments.length;i++)
                {
                    list+='<li>'+comments[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
    
  
};
