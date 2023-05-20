console.log(`Assignment-03 Fun Expression with no return value to check TCS interview eligibility such as.`);
console.log(``);
function funExpression(gradScore,hscScore,sscScore,candidateName)
{
    if(gradScore>=70||hscScore>=80||sscScore>90)
    {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview.`);
    }
    else{
        console.log(`Unfortunately you are not eligible for interview.`);
    }
}
funExpression(80,86,90,"Rahitya");
funExpression(70,65,55,"Savya");
funExpression(60,79,88,"Nrupen");