// Object.getOwnPropertyDescriptor(Math)

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // no change

let pai = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pai); 
// writable: false, enumerable: false, configurable: false

let myObj =
{
    name: "Chai",
    price: "200",
    isAvailable: true,
    orderChai: function()
    {
        console.log("Code fat Gaya");
    }
}

// console.log(myObj);

console.log(Object.getOwnPropertyDescriptor(myObj, "price"));
Object.defineProperty(myObj, "price", 
{
    enumerable: false// this stops price to be used during loops comment this to get result with price now it is coming only name and isAvailable
});
console.log(Object.getOwnPropertyDescriptor(myObj, "price"));

for (let [element, value] of Object.entries(myObj)) 
{
    if (typeof value != 'function')
    {
        console.log(`${element}, ${value}`);
    }
}

// Object.defineProperty(Math, "PI", 
//     {
//         writable: true,
//         enumerable: true,
//         configurable: true,
//         value: 67
//     }
// );

// Cannont redefine property