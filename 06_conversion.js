console.log("Implicit conversion to string");

let result;

result='3'+2;
console.log(`${result}`);

result='3'+true;
console.log(result);

result='3'+undefined;
console.log(result);

result='3'+null;
console.log(result);

console.log(`Implicit boolean conversion to number`);

result=4-true;
console.log(result);

result='5'-true;
console.log(result);

result=4+true;
console.log(result);

result=4+false;
console.log(result);

result=5-false;
console.log(result);

var num="100";
console.log(typeof num);
var stringNum=+num;
console.log(typeof stringNum);
console.log(``);
var num=100;
console.log(typeof num);
var stringNum=num.toString();
console.log(typeof stringNum);

var num=0=='';
console.log(num);
console.log('');
var num=0=='0';
console.log(num);
console.log('');
var num=0==false;
console.log(num);
console.log('');
var num=null==undefined;
console.log(num);
console.log(``);
var num=1==[1];
console.log(num);
console.log('');
var num=1==true;
console.log(num);
console.log('');
console.log(`${1=='1'}`);

console.log(`${'4'-'2'}`);
console.log(`${'5'-'2'}`);
console.log(`${'4'*2}`);
console.log(`${'4'/'2'}`);

console.log(4+undefined);
console.log(4-undefined);
console.log(true+undefined);
console.log(null+undefined);

console.log(Number('324'));
console.log(Number(324e-1));
console.log(Number(true));
console.log(Number(false));
