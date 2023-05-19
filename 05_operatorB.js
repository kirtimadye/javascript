console.log(`--------------------16/05/23--------------------`); 
console.log(`1. Find the greatest number amongst two number`);
var  greaterNumber=function(num1,num2)
{
    var result=num1>=num2 ? `${num1} is greater`:`${num2} is greater`;
    console.log(`The greatest number is = ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(``);

console.log(`2.Check---> 29,44,0,101-->Even or Odd numbers`);

var isEvenOrOddNum= function(num)
{
  var result=num%2==0? true:false;
  return result;
}
var result=isEvenOrOddNum(29);
var res=(result==true)? `29 is Even`:`29 is Odd`;
console.log(`1.1 The Given number 29  is = ${res}`);

var result=isEvenOrOddNum(44);
var res=(result==true)? `44 is Even`:`44 is Odd`;
console.log(`2.1 The Given number 44  is = ${res}`);

var result=isEvenOrOddNum(0);
var res=(result==true) ? `0 is Even`:`0 is Odd`;
console.log(`2.2 The Given number 0   is = ${res}`);

var result=isEvenOrOddNum(101);
var res=(result==true) ? `101 is Even`:`101 is Odd`;
console.log(`2.3 The Given number 101 is = ${res}`);
console.log(``);

console.log(`3. Check-->Which word has even or odd length "JavaScript","developer","Google"`);

var wordLength=function(str)
{
 var len=str.length;
 console.log(`3.1 The length of given string is = ${len}`);
 var result=len%2==0?true:false;
 return result;
}
var result=wordLength("JavaScript");
var res=(result==true)?`EVEN`:`ODD`;
console.log(`3.1 Given Word length is = ${res}`);
var result=wordLength("developer");
var res=(result==true)?`EVEN`:`ODD`;
console.log(`3.2 Given Word length is = ${res}`);
var result=wordLength("Google");
var res=(result==true)?`EVEN`:`ODD`;
console.log(`3.3 Given Word length is = ${res}`);
