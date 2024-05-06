"use strict"


function getSupplier(code) {
    // that returns all characters before the :
    let fullCode = code
    let supplier = fullCode.substring(0,4);

return supplier
}

function getProductNumber(code) {
    // that returns all characters between the : and -
    let fullCode = code 
    let number = fullCode.substring(5,8)

    
return number
}
function getSize(code) {
    // that returns all characters after the -
let fullCode = code 
let size = fullCode.substring(9)


return size
}


let code = "ACME:123-L"

console.log(`the large ${getSize(code)} part ${getProductNumber(code)} is supplied by ${getSupplier(code)}`)

//getSupplier(code)
//getProductNumber(code)
//getSize(code)