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

// function logger() {
//   console.log("My name is Tony");
// }
// logger(); //Invoking/Calling/Running or Executing The function

//Function Example

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice); //Re used the function
// console.log(appleJuice);

//Func helps keep our code DRY(DONT REPEAT YOURSELF)

/*****************************FUNCTION DECLARATIONS VERSUS FUNCTION EXPRESSIONS************** */

// Function Declarations:This is a way to define a reusable block of code that performs a specific task
// Function expression: This is a way to define functions as values as variables..

/******Function Declaration */
// function calcAgeM1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }
// const age = calcAgeM1(2003);
// console.log(age, ":Years");

// function calcAgeM2(birthYear) {
//   return 2037 - birthYear;
// }
// console.log(calcAgeM2(1991), ":Years");

/*********************************FUNCTION EXPRESSION OR ANONYMOUS FUNCTION********************* */
// const calcAge2 = function (birtYear) {
//   return 2037 - birtYear;
// };
// console.log(calcAge2(2003), "Years");

/***************************ARROW FUNCTIONS*************************** */
// An arrow function is a simple and concise way of writing function expressions.
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(2003);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearsUntilRetirement(1991));

/**********************FUNCTIONS CALLING OTHER FUNCTIONS******************************* */

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

/***************************************INTRODUCTION TO ARRAYS*************************************** */
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1964, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); //Gets the last element in The Array.

//An array is a linear data structure used to store multiple values in a single variable.
//An array inside an array is called a multidimensional array const random=["tony",[1,2]]
