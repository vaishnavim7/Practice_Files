//Named function with parameters.
console.log("***************** Named function ******************");
function FirstFun(num1, num2)
{
    var result;
    //condion statement to check the values.
    if(num1 > num2)
    {
        //result array
        result = ["First Fraction ", num1];
    }
    else{
        //result array
        result = ["Second Fraction ", num2];
    }

    //return value
    return result;
}

//variable definition
var fraction1 = 7/2;
var fraction2 = 4/7;

//variable to call the function
var fractionResult = FirstFun(fraction1, fraction2);

//Output the value in console
console.log("Fraction 1 : "+fraction1);
console.log("Fraction 2 : "+fraction2)
console.log("Biggest Fraction Result is : "+fractionResult);


console.log("***************** Anonymous function ******************");
//variable definition
var fr1 = 8/9;
var fr2 = 7/8;

//Anonymous function with parameters.
var FractionResult = function(num1, num2)
{
    var result;
    //condion statement to check the values.
    if(num1 < num2)
    {
        //result array
        result = console.log("First Fraction "+ num1);
    }
    else{
        //result array
        result = console.log("Second Fraction "+ num2);
    }

    //return value
    return result;
}

//Output the value in console
console.log("Fraction 1 : "+fr1);
console.log("Fraction 2 : "+fr2)
console.log("Smallest Fraction Result is : "+ FractionResult());

console.log("***************** Immediately Invoked Function Expression ******************");
//variable definition
var f1 = 18/9;
var f2 = 17/8;

//Output the value in console
console.log("Fraction 1 : "+ f1);
console.log("Fraction 2 : "+ f2)

//Immediately Invoked Function Expression with parameters.
var FractionResult1 = (function(num1, num2)
{
    var result;
    //condion statement to check the values.
    if(num1 == num2)
    {
        //result array
        result = ["Same Fraction ", num1, num2];
    }
    else{
        //result array
        result = ["Not Same Fraction ", num1, num2];
    }

    //return value
    return result;
}) (f1, f2)

//Output the value in console
console.log(FractionResult1);
