//var request = new XMLHttpRequest();
var request3;
if(window.XMLHttpRequest)
{
    request3 = new XMLHttpRequest();
}
else{
    request3 = new ActiveXObject("Micosoft.XMLHTTP");
    //for checking the Microsoft XOject
}

request3.open('GET', 'Doc1.txt');
request3.onreadystatechange = function(){
    if((request3.readyState == 4) && (request3.status == 200))
    {
        var modifyT = document.getElementById("d1");
        modifyT.innerHTML = request3.responseText;

    }
}
request3.send();
    