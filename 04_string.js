console.log("------------12/05/23---------------");
var greet="Good Morning";
var greetLength = greet.length;
console.log("Total no of character in given string is:",greetLength);
console.log("---------------------");
var firstName = "Kirtimala";
var nameLength = firstName.length;
console.log("Total no of character in given string is : ",nameLength);
console.log("---------------------");
var greet="Good Morning";
var greetCharat = greet.charAt(0);
console.log("Index of 0 postion character in given string is:",greetCharat);
console.log("---------------------");
var greet="Good Morning";
var greetCharat1 = greet.charAt(greet.length-1);
console.log("Index of last postion character in given string is:",greetCharat1);
console.log("--------------------------");
var firstName="Kirtimala";
var lastName="Madye";
var concatString=firstName.concat(lastName);
console.log("Concat string is:",concatString);
console.log("----------");
var firstName="Kirtimala";
var lastName="Madye";
var concatString=firstName.indexOf("l");
console.log("Index of l is:",concatString);
var indexA=firstName.indexOf("a");
console.log("",indexA);
var indexLast=firstName.indexOf("a");
console.log("Index of Last is ",indexLast);

console.log("-----------------------");
var firstName="Kirtimala";
var lastName="Madye";
var replaceString=firstName.replace("Kirtimala","Rahitya");
console.log("Replace of string is:",replaceString);
console.log("----------------------");
var firstName="  Kirtimala  ";
var trimmedFirstName=firstName.trim();
console.log("After Trim firstName is =",trimmedFirstName,trimmedFirstName.
length);

var lastName="   Madye  ";
firstNameLength=firstName.length;
console.log(firstNameLength);
console.log("-----------------------13/05/23----------------");
var greet = "Good Morning";
var includeResult=greet.includes("ing");
console.log("Is ing String available inside: ",includeResult);

var searchResult=greet.search("Mor");
console.log("Search Result : ",searchResult);

var sliceResult=greet.slice(0,30);
console.log("Slice result :",sliceResult);

var substringResult=greet.substring(4,6);
console.log("Substring Result: ",substringResult);

var greet="Good Morning Kirti,How are you";
var splitResult=greet.split(" ");
console.log("Split Result is: ",splitResult);

console.log(splitResult.length);





