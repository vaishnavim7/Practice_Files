//var request = new XMLHttpRequest();
var request2;
if(window.XMLHttpRequest)
{
    request2 = new XMLHttpRequest();

}
else{
    request2 = new ActiveXObject("Micosoft.XMLHTTP");
    //for checking the Microsoft XOject
}

request2.open('GET', 'Doc1.txt');
request2.onreadystatechange = function(){
    if((request2.readyState == 4) && (request2.status == 200))
    {
       console.log(request2);
        document.write(request2.responseText);
    }
}
request2.send();
    