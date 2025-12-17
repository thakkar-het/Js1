// to define a funtion is very simple
function myFunction() 
{
  console.log("Hello");
  console.log("my");
  console.log("name");
  console.log("is");
  console.log("a");
  console.log("function");  
}

// myFunction; // referencing the function // no printing will happen
// myFunction(); // calling the function

// function addTwoNumbers(num1, num2) //here num1 and num2 are called parameters
// {
//     console.log(num1 + num2);
// }
// let result = addTwoNumbers(3, 4);
// console.log(result);


// the above is wrong method to return a value from a function


// function addTwoNumbers(num1, num2) //here num1 and num2 are called parameters
// {
// //   const sum = num1 + num2;
// //   return sum;
// //   or
//   return num1 + num2;
// }

// const result = addTwoNumbers(); // calling the function gives NaN because no arguments were passed
// const result1 = addTwoNumbers(5, 10); // here 5 and 10 are called arguments
// console.log("The sum is: ", result1);

function Greeting(name /* = "HET" to be safe*/) // if some value is not passed then it will be undefined or if the safe case is written then it will be "HET" or be ovwerriden if some value is passed
{
    if(name === undefined) // to check if no argument is passed also written as if(!name)
    {
        console.log("please enter a username");
        return;
    }
    return `${name} just logged in`;
}
console.log(Greeting()); // undefined just logged in // if the "if" condition was not written
console.log(Greeting("HET")); // HET just logged in