"use strict"

console.log("working")

window.onload = function (){
//get the button off the poage so we can write some ccide that runs when it is clicked 
let theButton = document.querySelector("#theButton")
theButton.addEventListener("click", displayTime);


}

function displayTime(){

console.log("you clciked the theButton");


let theDate = document.querySelector("#theDate");
let theParagraph =document.querySelector("#theParagraph")


console.log(theDate.value)
let generatedDate = new Date (theDate.value+"T00:00:00");
theParagraph.innerHTML = generatedDate.toLocaleDateString();
}

let theDate = new Date();

//just get the year
console.log(theDate.getFullYear() + "/" + theDate.getMonth()+ 1 "/" + theDate.getDate());