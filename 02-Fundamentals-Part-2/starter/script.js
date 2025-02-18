"use strict";

/***********************STRICT MODE************************** */
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can Drive : D");

// const interface = "Audio";  Resrved word
// const private = 534; Reserved Word.
// const if= 23; Unexpected Token 'IF'

/******************************FUNCTIONS LECTURE********************************* */

// Function:Section or Piece of a reusable block of code,Declare once and can be reused multiple times.

function logger() {
  console.log("My name is Tony");
}
logger(); //Invoking/Calling/Running or Executing The function

//Function Example

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); //Re used the function
console.log(appleJuice);

//Func helps keep our code DRY(DONT REPEAT YOURSELF)
