var num1=100;
var num2=200;
function swapVariables(valueOne,valueTwo)
{
    console.log("Before swap:",);
    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log();

}
swapVariables(num1,num2);