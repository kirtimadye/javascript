console.log(`---------------------16/05/23--------------------`);
console.log(`Step 1.Write a normal function 'maleMarriageEligibility()' with 3 args gender,age and boyName.Function should return msg as per the step.`);
console.log(``);
var age;
var gender;
var boyName;
function maleMarriageEligibility(gender,age,boyName)
{
var result=(gender=="Male" && age>=21)? `1.1 Hey ${boyName} you are eligible for Marriage`:`1.1 Hey ${boyName} you are not eligible for Marriage`;
    return result;
}
var result=maleMarriageEligibility("Male",25,"Billgates");
console.log(`${result}`);

var result=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`${result}`);
console.log(``);
console.log(`Step 2.Write a function "femaleMarriageEligibility()" with 3 args gender,age and girlName.`);
console.log(``);
var age;
var gender;
var girlName;
function femaleMarriageEligibility(gender,age,girlName)
{
    var result=(gender=="Female" && age>=18)? `1.2 Hey ${girlName} you are eligible for Marriage`:`1.2 Hey ${girlName} you are not eligible for marriage`;
    return result;
}
var result=femaleMarriageEligibility("Female",16,"Jenifer");
console.log(`${result}`);
var result=femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(`${result}`);