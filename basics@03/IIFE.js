// Immeiately Invoked Function Expression (IIFE) example
(function() 
{
    // Named function IIFE example
    const message = "Hello, HET!";
    console.log(message);
})();
//** it helps from polluting the global scope by creating a separate scope for the variables inside the function.

// here message variable is not accessible outside the IIFE and it won't conflict with any other variable named message in the global scope. and also it helps in data privacy as the variables inside the IIFE are not accessible from outside. and also it can be used to create a module pattern in JavaScript. and also it can be used to create closures as the inner function can access the variables of the outer function even after the outer function has finished executing. and also it can be used to avoid naming collisions as the variables inside the IIFE are not accessible from outside. and also it can be used to create a private scope for variables and functions. and also it can be used to create a self-contained unit of code that can be easily reused and maintained. and also it can be used to create a separate scope for variables and functions to avoid conflicts with other code in the same file or project. and also it can be used to create a separate scope for variables and functions to avoid polluting the global scope. 

//** The first parentheses are used to convert the function declaration into a function expression, and the second parentheses are used to invoke the function immediately after its definition.

//** here we need to use semicolon before the IIFE to avoid any issues if the previous line doesn't end with a semicolon. or else it may lead to unexpected behavior.

( () => 
{
    const arrowMessage = "Hello from Arrow IIFE!";
    console.log(arrowMessage);
})(); // Arrow function IIFE example same as above but using arrow function syntax but will give an error if we don't use semicolon before it

// if we want to pass parameters to the IIFE we can do it like this:
((Username)  =>
{
    const greetMessage = `Hello, ${Username}! Welcome to IIFE.`;
    console.log(greetMessage);
})("HET");