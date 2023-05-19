var num1;
num1=num1++; //undefined+1==>NaN
console.log(`${num1},typeof of NaN is ${typeof num}`);

console.log(`${0/0}`);

var numTwo="200";
numTwo=numTwo++;
console.log(`${numTwo},${typeof numTwo}`);

var numTwo="Ten";
numTwo=--numTwo;
console.log(`${numTwo},${typeof numTwo}`);

var city="Pune";
result=+city;
console.log(`${result},${typeof result}`);

var num5="100";
var result=+num5;
console.log(`${result},${typeof result}`);
console.log(`Implicit Conversion`);
console.log(`${"3"+2}`);
console.log(`${"3"+undefined}`);
console.log(`${"3"+true}`);
console.log(`${"3"+null}`);
console.log(``);
console.log(`${"3"-2}`);
console.log(`${"3"-undefined}`);
console.log(`${"3"-true}`);
console.log(`${"3"-false}`);
console.log(`Implicit string convrsion to number`);
// let result;
// console.log(`${false}`);
// console.log();
// result='4'+true;
console.log("===========Explicit=========");
// var num2="30"; //String
// var num1=true; //boolean 
// var result=Number(num1);
// console.log(`Boolean to number explicit ${result}`);

var num3=1;
var result=Boolean(num3);
console.log(result);

console.log(`Number to Boolean Explicit`);

console.log(`Explicit conversion`);
// let result;

console.log(`${result}`);


var num4=100;
var result=String(num5);
console.log(`Number to String ${result}`);