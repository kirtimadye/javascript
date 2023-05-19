console.log(`--------------------19/05/2023-------------------`);
console.log(`1. Design a grade system with function name as gradeCalculation with argument marks and no return value.`);
function gradeCalculation(marks)
{
    if(marks==0||marks<0||marks>100||marks==Number("56")||marks=="Eighty"||marks==NaN||marks==null)
    {
        
        console.log(`5. Invalid Input ${marks}`);
    }
    else
    {      
    if(marks>=90)
    {
        console.log(`1. Funtastic marks:${marks},Your Grade is A+`);
    }
    else
    {        
    if(marks>=75 && marks<90)
    {
        console.log(`2. Excellent marks:${marks},Your Grade is A`);
    }
    else
    {       
    if(marks>=50 && marks<75)
    {
        console.log(`3. Good marks:${marks},Your Grade is B`);
    }
    else
    {        
    if(marks>=35 && marks<50)
    {
        console.log(`4. Marks is:${marks},Your Grade is c,Need Improvement.`);
    }
}
}
}
}
}
console.log(`============Funtastic Marks Output=============`);
gradeCalculation(98);
gradeCalculation(90);
gradeCalculation("91");
console.log(` `);
console.log(`=============Excellent Marks Output=============`);
gradeCalculation(80);
console.log(` `);
console.log(`===============Good Marks Output===============`);
gradeCalculation(64);
console.log(` `);
console.log(`==========For Improvement Marks Output=========`);
gradeCalculation(49);
gradeCalculation(35);
gradeCalculation(29);
console.log(` `);
console.log(`================Invalid Output================`);
gradeCalculation(-7);
gradeCalculation(0);
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
gradeCalculation(150);