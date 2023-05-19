console.log(`1.1 Fun Expression with no return value to check TCS interview eligibility such as,If Graduation score is greater than equal to 70% OR HSC score is greater than equal 80% OR SSC score is greater than 90% then only.`);
function funExpression(gradScore,hscScore,sscScore,candidate_name)
{
  var score=(gradScore>=70 || hscScore>=80 || sscScore>=90)? `1.3.1.Congrates ${candidate_name} you are eligible for TCS interview.`:`1.3.2.Congrates ${candidate_name} Unfortunately you are not eligible for interview.`;
  console.log(`${score}`);
}
funExpression(80,86,90,"Kirtimala");
funExpression(70,65,55,"Rahitya");
funExpression(60,79,88,"Nrupen");