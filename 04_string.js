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
var firstNameLength=firstName.length;
console.log(firstNameLength);

varx=5,y=1  
var obj ={ x:10}; 
with(obj)  
{  
      console.log(y);
}  
console.log("---------");
var count =0;  
while (count <10)  
{  
     console.log(count);  
     count++;  
}  