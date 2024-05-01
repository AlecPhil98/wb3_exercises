"use strict"

console.log("cat")

//Get social securtiy tax 
function getSocSecTax(dog) {
    let grossPay = dog
    let taxRate = 6.2 /100 /12;
    let socialSecurityTax = grossPay * taxRate;

    return socialSecurityTax
}
console.log (getSocSecTax(1000).toFixed(2))

//Get medicare tax 

function getMedicareTax(hamster){
    let grossPay = hamster ;
    let taxRate = 1.45;
    let medicareTax = grossPay * taxRate;

return medicareTax 
}
console.log (getMedicareTax(550).toFixed(2))