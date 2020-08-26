//To get the values in History Block
function getHistoryValue(){
    return document.querySelector("#history").innerText;
}
//To Print the values in History Block
function printHistory(num)
{
    document.querySelector("#history").innerText = num;
}
//To get the values in Output Block
function getOutputValue(){
    return document.querySelector("#output").innerText;
}
//To Print the values in Output Block
function printOutput(num)
{
    if(num == "")
    {
        document.querySelector("#output").innerHTML = num;
    }
    else{
    document.querySelector("#output").innerHTML = getFormatedValue(num);
    }
}
//To get the values in , separated format
function getFormatedValue(num)
{
    if( num == "-")
    {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseValueFormat(num)
{
    return Number(num.replace(/,/g,''));
}

//To perform the operation on the numbers
var operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length; i++)
{
    operator[i].addEventListener("click", function(){
        if(this.id == "clear")
        {
            printHistory("");
            printOutput("");

        }
        else if(this.id == "backspace")
        {
            var output1 = reverseValueFormat(getOutputValue()).toString();
            if(output1)
            {
                output1 = output1.substr(0, output1.length-1);
                printOutput(output1);
            }
        }
        else{
            var output2 = getOutputValue();
            var history2 = getHistoryValue();
            if(output2 == "" && history2 != "")
            {
                if(isNaN(history2[history2.length - 1]))
                {
                    history2 = history2.substr(0, history2.length-1);
                }
            }
            if(output2 != "" || history2 != "")
            {
                //condition statement
                output2 = output2 == "" ? output2 : reverseValueFormat(output2);
                history2 = history2 + output2;
                if(this.id == "=")
                {
                    var result2 = eval(history2);
                    printOutput(result2);
                    printHistory("");
                }
                else{
                    history2 = history2 + this.id;
                    printHistory(history2);
                    printOutput("");
                }
            }
        }
    });
}

//To Work with the number buttons
var number = document.getElementsByClassName("number");
for(var i = 0; i<number.length; i++)
{
    number[i].addEventListener('click', function(){
        var output = reverseValueFormat(getOutputValue());
        if(output != NaN)
        {
            output = output + this.id;
            printOutput(output);
        }
    });
}