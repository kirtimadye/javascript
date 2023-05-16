console.log(`-----------15/05/23------------`);
console.log(`1. Write a normal function in such a way that it should accept one string value as argument`);
console.log(`Values are:1-"JavaScript"||2-"Google Chrome"||3-"Developer Smart"`);
console.log("");
function squareOfWordLength(str)
{
    var lenString=str.length;
    console.log(`1.1 The length of word is = ${lenString}`);
    var sqrString=lenString*lenString;
    console.log(`1.2 Square of the length of word is = ${sqrString} `);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(` `);
console.log(`2. Gven a string "I am Angular Developer" write a function with no arg and no return value`);
console.log(` `);
function stringOperator()
{
    var str="I am Angular Developer";
    console.log(`2.1 Given a string is = ${str}`);
    var lengthStr=str.length;
    console.log(`2.1 The length of the string is = ${lengthStr}`);
    var resultWord=str.split(" ");
    console.log(`2.1 Total number words in given string are = ${resultWord}`);
    var totalWords=resultWord.length;
    console.log(`2.1 Total number of words length is = ${totalWords}`);
    var divString=lengthStr/totalWords;
    console.log(`2.1 The String Length / Total number words length = ${divString} `);
    mulString=lengthStr*totalWords;
    console.log(`2.2 The String Length * Total number words length = ${mulString} `);
}
stringOperator();