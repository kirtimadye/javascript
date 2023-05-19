console.log(`--------------18/05/23-----------`);
var show = function () {
  return 100;
};
var result = show();
console.log(`----Ex-1-----`);
var isTrafficToDailyRoute = false;
if (isTrafficToDailyRoute) 
  console.log("Daily route");
  console.log(`Ging by Cab`);
  console.log(`Had breakfast in middle`);
 
  console.log("Office");


console.log(`-----Ex.2-----`);
var num1=13;
// var isEven=num1%2==0;
var isEven=NaN;
if(isEven==true)
{
console.log(`EVEN`);
}
else{
console.log(`ODD`);
}
console.log(`MAD`);

console.log(`----Ex-3-----`);
function marriageEligibility(age,gender,name)
{
 if(gender=="Male" && age>=21)
 {
    console.log(name);
 }
else
{
    if(gender=="Female" && age>=21)
    {
        console.log("Komal");
    }
 else{

    console.log(`MAD`);
 }
}
}
marriageEligibility(23,"Male","Rahitya");
marriageEligibility(21,"Female","Komal");
marriageEligibility(33,"transgender","MAD");
marriageEligibility(16,"transgender","MAD1");


