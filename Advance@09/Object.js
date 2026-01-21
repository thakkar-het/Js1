/*
JS is a prototypal language which means ye kabhi haar nahi maanti if ye hamesha uper ke uper branches/layers ko access krke me se kaam karane ki try krti hai only stops if it gets a NULL Generally everything in OOP is due to this prototypal behaviour only also refered as prototypal inhereitance

JAADU :- Everything in JS is a Object or we can say has an object as it's parent and  Object has no parent so it gives NULL at the end and JS stops layering at it
*/


// Example of function as Object
function MultiBy5(n)
{
    return n * 5;
}
MultiBy5.power = 2;
console.log(MultiBy5(3));
console.log(MultiBy5.power);
console.log(MultiBy5.prototype); 

// It Is Context Set By Default, It is "this" of the method of it's context

// In short the all other properties of prototyes and context of " this " are available here

function CreatePerson(name, score)
{
    this.name = name; // "this" sets current context
    this.score = score;
}

CreatePerson.prototype.increment = function ()
{
    this.score += 5;
};

CreatePerson.prototype.Printer = function()
{
    console.log(`My Price is ${this.score}`);
} 
// "this" keyword solves confusion among 2 persons that whose score should be increased and printed
let Chai = new CreatePerson("Cha", 15);
let Dudh = new CreatePerson("milk", 50);

// *** If the "new" keyword isn't injected then it will not be able to get the extra methods/functions that we are giving it that work is to be done by "new" or else it will give error of  Cannot read properties of undefined

Chai.Printer();
Dudh.increment();
Dudh.Printer();

// Notes From Hitesh Sir


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/