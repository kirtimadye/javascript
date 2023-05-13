console.log("Assignments 01:----------13/05/23----------");
function stringHandsOn()
{
var string="  Hey you are doing good,keep it up  ";
console.log(`1.Given String is = ${string}`);
var string1=string.length;
console.log(`2.The length of the string is =${string1}`);
var trimString=string.trim();
var trimExtra=trimString.length;
console.log(`3.The leading and trailing extra spaces of the string is = ${trimString} "and" It's length is ${trimExtra}`);
var stringExtraSpace=string1-trimExtra;
console.log(`4.The total extra spaces are: ${stringExtraSpace}`);
console.log(`5.The First character is after trim : ${trimString.charAt(0)} "and" The Second character is after trim : ${trimString.charAt(32)}`);
console.log(`6.The count of total words are in the string : ${trimString.split(" ").length}`);
console.log(`7.The index of word "good" : ${trimString.indexOf("good")}`);
console.log(`8.The substring starting from index 22 using substring():${trimString.substring(22)} "and" using slice():${trimString.slice(22)}`);
var endString=trimString.endsWith("up")
console.log(`9.Is string ends with word "up" : ${endString}`);
console.log(`10.Is string starts with word "Hey" : ${trimString.startsWith("Hey")}`);
 
}
stringHandsOn();