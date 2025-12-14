// Numbers

const num = 34;
const num2 = new Number(56.78);
// console.log(num);
// console.log(num2);

// console.log(num2.toString());
// console.log(num2.toString().length);
// console.log(num2.toFixed(4)); // rounds to 4 decimal places;
// console.log(num2.toFixed(0)); // rounds to 0 decimal places;
// console.log(num2.toPrecision(3)); // rounds to 3 significant digits and returns as string
// console.log(num2.toPrecision(1)); // rounds to 1 significant digit and for more than 1 digit it uses scientific notation

let anothernum = 445192159425384389;

// console.log(anothernum.toLocaleString("en-IN")); // prints number in Indian numbering format
// if en-IN is not used then it prints in default US numbering format






// Maths

// console.log(Math); // gives math object and for its method we have to go in inspect console

//MATH METHODS

// console.log(Math.abs(-8)); // prints absolute valueconsole.log(Math.round(4.3)); // normal rounding off
// console.log(Math.round(4.3)); // normal rounding off
// console.log(Math.ceil(4.3)); // Inverted GIF
// console.log(Math.floor(4.3)); // GIF 
// console.log(Math.min(1 ,4 ,56 ,2 ,-8 ,0 ,5)); // prints min value of an array
// console.log(Math.max(1 ,4 ,56 ,2 ,-8 ,0 ,5)); // prints max value of an 






//Most imp method we are going to use
//console.log(Math.random()); // gives any random value between 0 inclusively and 1 exclusively

// Algorithm to get any random value between some min and max value

// Math.random() * (max - min + 1) + min //gives a fractional value ,to decide how many decimal points we can use toFixed
let min = 4;
let max = 14;

// console.log(Math.random() * (max - min + 1) + min);
// console.log((Math.random() * (max - min + 1) + min).toFixed(2));

// if we want only integers then we can write 
// Math.floor(Math.random() * (max - min + 1)) + min;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);