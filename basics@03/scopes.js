// scope is nothing just a container where variables are accessible like pair of curly braces {}

// for declaring variables we have three keywords: var, let and const but they have different behaviors when it comes to scope
// we generally use let and const in modern JavaScript because they have block scope and help avoid some common pitfalls associated with var

// var has function scope, meaning it is accessible throughout the entire function in which it is declared
function varScopeExample() 
{
    if (true) 
    {
        var x = 10; // x is declared with var
    }
    // console.log(x); // x is accessible here, will print 10
}
varScopeExample();

// let and const have block scope, meaning they are only accessible within the block (enclosed by {}) in which they are declared
function letConstScopeExample() 
{
    if (true) 
    {
        let y = 20; // y is declared with let
        const z = 30; // z is declared with const
        // console.log(y); // y is accessible here, will print 20
        // console.log(z); // z is accessible here, will print 30
    }
    // console.log(y); // Uncaught ReferenceError: y is not defined
    // console.log(z); // Uncaught ReferenceError: z is not defined
}
letConstScopeExample();

let a = 5; // a is declared in the global scope
function globalScopeExample() 
{
    let a = 15; // a is declared in the function scope
    // console.log("INNER: ",a); // a is accessible here, will print 15
}
globalScopeExample();
// console.log(a); // a is accessible here, will print 5
// global scope in node.js vs browser are different just to be remembered\\

// nested scopes

function one()
{
    let name = "Het";
    function two()
    {
        let number = 4;
        // let name = "Thakkar";
        console.log(name + " " + number); // can access name from outer scope
    }
    // console.log(number); // Uncaught ReferenceError: number is not defined
    two();
}
one();

if(true)
{
    let name = "Het";
    if(name === "Het")
    {
        let surname = " Thakkar";
        console.log(name + surname);
    }
    // console.log(surname); // Uncaught ReferenceError: surname is not defined
}
// console.log(name); // Uncaught ReferenceError: name is not defined



// 2 types of declarring functions ///////////////////////////////////////////////////////////////////////////////////////

function fxn1(num)
{
    return num + 1;
}
console.log(fxn1(4)); // 5

let fxn2 = function(num)
{
    return num + 2;
}
console.log(fxn2(4)); // 6

/* but if we try to call fxn2 before its declaration like this

console.log(fxn2(4)); // Uncaught ReferenceError: Cannot access 'fxn2' before initialization

let fxn2 = function(num)
{
    return num + 2;
}

it will give error because fxn2 is declared using let and it is not hoisted like fxn1 which is declared using function declaration

*/