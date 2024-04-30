"use strict"
console.log("this is wokring")

function displayingMailingLabel(name, address, city, state, zip) {


    console.log(name);
    console.log(address);

    //console.log(${city}, ${state} ${zip});
    //this is hoiw oyu would do this with string concatenation
    console.log(city + "," + state + "" + zip);



}

//use the above funtions 
displayingMailingLabel("alec", "1234 Round Steet", "Grand Prarie", "Texas", 12345);

//ex2
function addNumbers(num1, num2) {
    let sum = num1 + num2
    console.log(num1 + " + " + num2 + " = " + sum);


}
addNumbers(15, 12)

//ex3
function displayRecipt(potatoe, cheese){

totalDue = potatoe
amountPaid = cheese
changeDue = totalDue - amountPaid

console.log("Total Due: " + totalDue)
console.log("Amount paid: " + amountPaid)
console.log("Change Due: " + "$" + Math.abs(changeDue))
console.log("The amount due was $" + totalDue + " so then we paid $" + amountPaid + " plus a $" + Math.abs(changeDue) + " tip" )
}
displayRecipt(30,35)



