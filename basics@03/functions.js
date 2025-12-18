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
//   console.log(num1 + num2);
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
  if(name === undefined) // to check if no argument is passed also written as if(!name) // empty string, null, undefined, 0, NaN all are falsy values
  {
    console.log("please enter a username");
    return;
  }
  return `${name} just logged in`;
}
// console.log(Greeting()); // undefined just logged in, if the "if" condition was not written // please enter a username and undefined
// console.log(Greeting("HET")); // HET just logged in

// when we dont know how many number of arguments will be passed we use rest operator
function get_all_numbers(...numbers)
{
  return numbers;
}
// console.log(get_all_numbers(100, 500, 200, 3000));
// we can also pass objects and arrays as arguments to functions
let Obj1 = 
{
  name: "HET",
  age: 20,
  city: "Ahmedabad"
};
function Object_fxn(anyobject)
{
  return `Name is ${anyobject.name}, Age is ${anyobject.age}, City is ${anyobject.city}`;
}
console.log(Object_fxn(Obj1)); // or we can directly pass an object without storing it in a variable
console.log(Object_fxn({name: "ABC", age: 25, city: "Mumbai"}));

let arr1 = [10, 20, 30, 40, 50];
function Array_sec_val_fxn(anyarray)
{
  return anyarray[1];
}
console.log(Array_sec_val_fxn(arr1)); // or we can directly pass an array without storing it in a variable
console.log(Array_sec_val_fxn([100, 200, 300, 400]));