var request4;
if(window.XMLHttpRequest)
{
    request4 = new XMLHttpRequest();
}
else{
    request4 = new ActiveXObject("Microsoft.XMLHTTP");
}

request4.open('GET', 'Doc1.txt');

request4.onreadystatechange = function()
{
    if((request4.readyState == 4) && (request4.status == 200))
    {
        /*
        var modify2 = document.getElementsByTagName("li");
        modify2[2].innerHTML = request4.responseText;
         */
        
        /* 
        var modify2 = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
        modify2[2].innerHTML = request4.responseText;
        */
        var modify2 = document.getElementsByTagName("li");
        for (let i = 0; i < modify2.length; i++) {
            modify2[i].innerHTML = request4.responseText;
        }

    }
}
request4.send();
