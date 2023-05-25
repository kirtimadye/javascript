console.log(`Assignment:To count character 'a' or 'A'`);
var count=0;
var string1="I AM Learning JavaScript,The Language of internet";

console.log(`1.Given strings are string1="I AM Learning JavaScript,The Language of internet" "and" string2="My favourite movie is LAggAn"`); 
    for(var i=0;i<string1.length;i++)  
    {
    var char= string1.charAt(i);      
    if(char=='a'||char=='A')
    {
        count++;
        
    }
    
 }
 console.log(`1.Total number of characters "A" or "a":${count}`);
 var count1=0;
 var string2="My favourite movie is LAggAn"
 for(var i=0;i<string2.length;i++)  
    {
    var char= string2.charAt(i);      
    if(char=='a'||char=='A')
    {
        count1++;
        
    }
    
 }
 console.log(`1.Total number of characters "A" or "a":${count1}`);

