console.log("-----Assignments 02.1-Function with no arguments and no return type-----");
console.log("-----First Declaration with function name funText()-----");
function funText()
{
    console.log("Primitive data types are = 1-Number 2-Boolean 3-String");
    console.log("Special data type or Trivial data types are = 1-null 2-undefined");
    console.log("Non Primitive data type or Reference data type or Composite data types are = 1-object 2-Array");
}
funText();
console.log("-----Second Declaration with function name funText1()-----");
function funText1()
{
// console.log("typeof operator");
console.log("typeof operator is used to find data type of any variable");
// console.log("Syntax:");
console.log("typeof value; or typeof(value)");
// console.log("or");
// console.log("typeof variableName; or typeof(variableName)");
}
funText1();
console.log("-----Assignments 02.2-Function with arguments-----");
function personDetails(firstName,lastName,collegeName)
{
console.log("My Personal Details is = ",firstName,lastName);
console.log("College name is = ",collegeName);
}
personDetails("Arati","Subhedar","GJC");
console.log("-----Assignments 02.3-Function with arguments and no return type-----");
var name1;
var name2;
function swapValuesDude(valueOne,valueTwo)
{
    console.log("Before Swapping Value is = ");
    console.log("First Value is = ",valueOne);
    console.log("Second Value is = ",valueTwo);    
    var temp;
    temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log("After Swapping Value is = ");
    console.log("First Value is = ",valueOne);
    console.log("Second Value is = ",valueTwo);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);
console.log("-----Assignments 02.4-Function with arguments-----");
function addThreeValues(a,b,c)
{
     result= a + b + c;
    console.log("Result is = ",result);

}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");