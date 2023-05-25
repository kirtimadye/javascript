console.log(`Assignment A:Factorial of a number.`);
function factorialOfNum(num)
{
    var fact=1;
    for(var i=1;i<=num;i++)
    {
       fact=fact*i; 
    }
    return fact;
}
var fact = factorialOfNum(5);
console.log(`1.Factorial of given number is = ${fact}`);
var fact=factorialOfNum(3);
console.log(`2.Factorial of given number is = ${fact}`);
var fact=factorialOfNum(9);
console.log(`3.Factorial of given number is = ${fact}`);
var fact=factorialOfNum(0);
console.log(`4.Factorial of given number is = ${fact}`);
var fact=factorialOfNum(8);
console.log(`5.Factorial of given number is = ${fact}`);
var fact=factorialOfNum("null");
console.log(`6.Factorial of given number is = ${fact}`);
var fact=factorialOfNum(NaN);
console.log(`7.Factorial of given number is = ${fact}`);
var fact=factorialOfNum(undefined);
console.log(`8.Factorial of given number is = ${fact}`);
