console.log(`==========================18/05/2023==============================`);
console.log(`1. Write a Function voteEligibility() with one arg-->age to check whether he or she is eligible for voting or not,Then accordingly display message on console ,don't return the value please.Ex.45,17,8,20,-10,200,0,undefined,null`);
console.log(" ");
function voteEligibility(age)
{
    if(age==0||age==-10||age>120||age==null||age==undefined||age==200)
    {
        console.log(`In Valid data is ${age}`);
    }
    else{
        if(age>=18)
        {
            console.log(`He or She is ${age} eligible for vote.`);
        }
        else{
            if(age<18)
            {
                console.log(`He or She is ${age} not eligible for vote`);
            }
            
        }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(20);
voteEligibility(8);
console.log(``);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
