
function getNewContents() {
    var request=new XMLHttpRequest();
    if (request)
    {
        request.open("get","example.txt",true);
        request.onreadystatechange=function () {
            if (request.readyState==4){
                alert("response ok");
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }

        };
        request.send(null);

    }
    else{alert("not support XMLHttpRequest")}
    alert("more quickly than response");

}

addLoadEvent(getNewContents);
