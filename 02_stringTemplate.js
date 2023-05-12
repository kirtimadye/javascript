console.log("---------Assignment 02---------");
var string="  Hey you are doing good, keep it up  ";
function stringHandsOn()
{
 console.log("----------Given String---------");
 console.log(string);
 var stringLength1=string.length;
 console.log("Calculate length of the string is = ",stringLength1); 

 console.log("---The leading and trailing extra spaces of the string is--");
 var leadTrail=string.trim()
 console.log(leadTrail); 
 var stringLength=leadTrail.length;
 console.log("Calculate length of the string is = ",stringLength);

 console.log("The Total number extra spaces count = ",stringLength1-stringLength);
 console.log("----------5-----------");
 console.log("First character of the string after trim is = ",leadTrail.charAt(0),);
 console.log("First character of the string after trim is = ",leadTrail.charAt(33));



}
stringHandsOn();