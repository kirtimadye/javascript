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
console.log("-------------12/05/23---------------");
function addition(num1,num2)
{
console.log("Addition of number is = ",num1+num2);
}
addition(100,200);
addition(890.400,3456);
console.log("--------------Return value---------------");
function addition1(num1,num2)
{
   var result=num1+num2;
   return result;
}
var returnValue=addition1(100,200);
console.log("Addition of number is = ",returnValue);
var returnResult=addition1(890.400,3456);
console.log("Addition of number is = ",returnResult);
console.log("------------------String----------------------");
