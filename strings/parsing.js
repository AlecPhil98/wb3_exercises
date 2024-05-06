"use strict"


function parseAndDisplayName(someName) {
    ///create a variable of the first name 
    let fullName = someName;

    //find the postion of the  first space 
    let spacePostion = fullName.indexOf(" ");


    //create variables for the first and last name 
    //for the first anme we start at position 0 and go to the space ,
    //since it does not include the chararter in last postion , we get the first name 
    let firstName = fullName.substring(0, spacePostion)

    //if we stat tat the spoace postiuojn and do noit suplky and ending postion, it 
    //give us the characters from the space until the end.
    //since we dont want the sppce , we add to the starting to move us  past the space 
    let lastname = fullName.substring(spacePostion + 1,)


    console.log("Name" + fullName + "First name: " + firstName + " Last name " + lastname)


}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");