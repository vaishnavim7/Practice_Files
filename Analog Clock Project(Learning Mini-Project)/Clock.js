/* select the hour, minute and second with their resp id */
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

/* To get the current time */
var date = new Date();
console.log(date);

/*To get the current time hour, minute and second*/
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour : " +hr+ " Minute : " +min+ " Second : " +sec);

/*hour, minute and second variable*/
let hrPosition = (hr * 360/12) + (min * (360/60)/12);
let minPosition = (min * 360/60) + (sec * (360/60)/60);
let secPosition = (sec * 360/60);

function runTheClock()
{
    /*Solve the pesky "return to zero" problem */
    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

    /*To rotate hour, minute and second arms*/
    HOURHAND.style.transform = "rotate("+ hrPosition +"deg)";
    MINUTEHAND.style.transform = "rotate("+ minPosition +"deg)";
    SECONDHAND.style.transform = "rotate("+ secPosition +"deg)";
}

/*To Rotate the all arems continuously */
var interval = setInterval(runTheClock, 1000)