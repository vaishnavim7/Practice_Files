var request = new XMLHttpRequest();
//           message, Location, Asynchronous(true)/Synchronous(false) (by default Asynchronous true)
request.open('GET', 'Doc1.txt',false);
request.send();
console.log(request);

    