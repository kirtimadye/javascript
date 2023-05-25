console.log(`==========================24/05/2023============================`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`1.The total elements available or length = ${arrayNumbers.length} `);
arrayNumbers[0];
arrayNumbers[arrayNumbers.length-1];
console.log(`2.The First element is = ${arrayNumbers[0]}`);
console.log(`2.The last element is = ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`3.The third last element using length property = ${arrayNumbers[arrayNumbers.length-3]} `);
for(var i=0;i<=arrayNumbers.length;i++)
{
    if(arrayNumbers[i]%2==0)
    {
        console.log(`4.All Even numbers are = ${arrayNumbers[i]}`);
        
    }  
}
for(var i=0;i<arrayNumbers.length;i++)
{
    if(arrayNumbers[i]%2!==0)
    {
        console.log(`5.All Odd numbers are = ${arrayNumbers[i]}`);
        
    }  
}
var sumEven=0;
for(var i=0;i<=arrayNumbers.length;i++)
{
    if(arrayNumbers[i]%2==0)
    {
        sumEven=sumEven+arrayNumbers[i];      
    }  
}
console.log(`6.Sum of all Even numbers are = ${sumEven}`);
var sumOdd=0;
for(var i=0;i<arrayNumbers.length;i++)
{
    if(arrayNumbers[i]%2!==0)
    {
        sumOdd=sumOdd+arrayNumbers[i];        
    }  
}
console.log(`7.Sum of all Odd numbers are = ${sumOdd}`);
var sum=0;
for (var index =0; index<arrayNumbers.length; index++) 
{
    sum=sum+arrayNumbers[index];  
}
console.log(`8.The sum of all elements from arrayNumbers = ${sum}`);
for(var i=0;i<=arrayNumbers.length;i++)
{
    if(arrayNumbers[i]%5==0)
    {
        console.log(`9.Multiple of 5 all numbers are = ${arrayNumbers[i]}`);
        
    }  
}

console.log(`10.Is number 115 available in arrayNumbers? = ${arrayNumbers.includes(115)}`);
console.log(`11.Is number 23 available in arrayNumbers?= ${arrayNumbers.includes(23)}`);
console.log(`12.Insert numbers-->55,66 before index 3 `);
arrayNumbers.splice(3,0,55);
arrayNumbers.splice(4,0,66);
console.log(arrayNumbers);
console.log(`13.Delete 3 elements starting from index 4 and log arrayNumbers = `);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);
