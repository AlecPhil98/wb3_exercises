"use strict"

console.log("cat")

//Get social securtiy tax 
function getSocSecTax(dog) {
    let grossPay = dog
    let taxRate = 6.2 / 100;
    let socialSecurityTax = grossPay * taxRate;

    return socialSecurityTax
}
console.log(getSocSecTax(1000).toFixed(2))

//Get medicare tax 

function getMedicareTax(hamster) {
    let grossPay = hamster;
    let taxRate = 1.45 / 100;
    let medicareTax = grossPay * taxRate;

    return medicareTax
}
console.log(getMedicareTax(550).toFixed(2))

//Get federal tax 

function getFederalTax(grossPay, withholdingCode) {
    let taxRate = 0;
    let federalTaxWithholding = grossPay * taxRate;

    if (withholdingCode === 0) {
        taxRate = 23 / 100;
    }
    else if (withholdingCode === 1) {
        taxRate = 21 / 100;
    }
    else if (withholdingCode === 2) {
        taxRate = 19.5 / 100;
    }

    else if (withholdingCode === 3) {
        taxRate = 18.5 / 100;
    }
    else if (withholdingCode >= 4) {
        taxRate = .18 /100 - ((withholdingCode - 4) * .005);
    }


    return federalTaxWithholding
}
console.log(getFederalTax(750, 0))
console.log(getFederalTax(1550, 2))
//console.log (getFederalTax(1100,6))

