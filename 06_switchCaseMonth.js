console.log(`Create Normal with name-->monthOfYear() with one arg-->monthNumber.Inside this write a switch case and pass monthNumber in switch.`);
function monthOfYear(monthYear) {
  switch (monthYear) {
    case 2:
      console.log(`2-Month is:February as month number is ${monthYear}`);
      break;
    case 5:
      console.log(`5-Month is:May as month number is ${monthYear}`);
      break;
    case 12:
      console.log(`12-Month is:December as month number is ${monthYear}`);
      break;
    default:
      console.log(`Invalid Choice = ${monthYear}`);
  }
}
console.log(`===============Name of the Month===============`);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
console.log(`================Invalid Choice=================`);
monthOfYear(15);
monthOfYear(100);
