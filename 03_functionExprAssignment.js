console.log("1-Write a function Expression to get square of the numbers are 5,6,25,100");
var square=function(num)
{
    var result = num*num;
    return`Square of the number is = ${ result }`;
}
var result=square(5);
console.log(result);
var result=square(6);
console.log(result);
var result=square(25);
console.log(result);
var result=square(100);
console.log(result);
console.log("");
console.log("2-Check and log type of function");
console.log("Type of Square Variable is =",typeof(square));
console.log("");
console.log("3-Write a FE to get the area of reactangle plot");
var areaPlot=function(length,width)
{
    var result=length*width;
    return`The area of Rectangle is = ${result}`;
}
var result=areaPlot(499,917);
console.log(result);
console.log("");
console.log("4-Write a FE with two args and should swap the passed values and log on console before swap and after swap values inside function itself.");

var valueOne;
var valueTwo;
var swapValues=function(valueOne,valueTwo)
{
    console.log(`Before Swapping Values:`,"First Value-",valueOne," Second Value-",valueTwo);
    var temp;
    temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log(`After Swapping Values:`,"First Value-",valueOne," Second Value-",valueTwo);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("");
console.log(`5-Write a FE which can perform the below steps for string "JS the most popular language of internet"`);

var result=function()
{
    var string="JS the most popular language of Internet";
    var stringResult=string.length
    console.log("A.The total character available in the string is =",stringResult);
    console.log("B.The character at index 6 =",string.charAt(6));
    console.log("C.The character at index 11 =",string.charAt(11));
    var resultString=string.charAt(stringResult-1);
    console.log("D.The last character using length property is =",resultString);
    console.log("E.The very first character from the given string =",string.charAt(0));
    var result=string.split(" ").length;
    console.log("F.The total number words of the given string is =",result);
    var mul=result*result;
    console.log("Calculate the square of the string is =",mul);   
}
result();