console.log(`Assignment:OA:1.Count the total number vowels including small and capital vowels for string--> "I am very good IT Developer"`);
console.log(``);
var count=0;
var word="I am very good IT Developer";
console.log(`1.Given string is "I am very good IT Developer"`); 
    for(let i=0;i<word.length;i++)  
    {
    var char=word.charAt(i);       if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
    {
        count++;
    }
 }
 console.log(`1.Count total vowels:${count}`);
 console.log(``);
 console.log(`2.Write a function to get the sum of cube of numbers from 1 to 5.`);
 
 function sumOfCube(num1,num2,num3,num4,num5) 
 {
    var sum=0;
    for(var i=1;i<=5;i++)
    {
    sum +=i**3;
    }
    return sum;
 }
var sum1=sumOfCube(1,2,3,4,5);
console.log(`2.Sum of cube of numbers from 1 to 5=${sum1}`);

var sumOfCube=function(num)
{
    var sum=0;
    for (var index = 1; index <=5; index++) {
        sum +=index**3;    
    }
    console.log(sum);
}
sumOfCube(5);

 

 console.log(` `);
 console.log(`3.For the given string1->"Hard work always pays back",string2->"Soon I will be Angular IT Champ." Write a functions as      
 mentioned below.`);
 console.log(`3.1.Function oddPositionedChars() with one arg.`);
 console.log(`3.1.1.Log only odd positioned chars on console and do not consider empty spaces.`);
 console.log(`3.1.2.Invoke or call this function for above given string1 and string2 separately`);
function oddPositionedChars(string1)
{
    var newString="";
    for(let i=0;i<string1.length;i++)
    {
    
        if(i%2!==0)
        {      
            var char=string1.charAt(i);
            newString=newString.concat(char);
        }
    }
    console.log(`Odd Positioned Chars = ${newString}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");

function oddPosition()
{
    var str="";
    for (let index = 0; index < given.length; index++) {
        var char=given.charAt(index);
        if(index%2!=0  && char!="")
        {
            str=str+char;
        }
        
    }
    console.log(str);
}
oddPosition("Kirtimala");