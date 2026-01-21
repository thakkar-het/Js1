/*

Do Javascript have classes?
Technically (No !) This feature was introduced in ES6(ECMAScript2015) 
** Javascript is a prototype based language (classes here are just syntactical sugar)

## Object is a
-- Collection of properties and methods
-- for ex:- toLowerCase

## why use OOP
Without it code messes up a lot and any chunk of it is hard to reuse anywhere dur to OOP we can now use more JS features and services effectively

# Parts of OOP
-- Object literal
-- Constructor functions
-- Prototypes(proto)
-- Classes
-- Instances(new, this)

## 4 pillars of OOP
-- Abstarction (hidden complex implementation details)
-- Encapsulation (bundling data and methods and controlling direct access to data)
-- Inheritance (a core mechanism where a new class (subclass/derived class) acquires properties (fields/attributes) and behaviors (methods/functions) from an existing class (superclass/base class))
-- Polymorphism (allowing a single interface (like a method name) to represent different underlying implementations or objects)

*/

let me = 
{
    name: "Het",
    age: 18,
    LoginCount: "20",
    IsSignnedIn: true,

    getMyDetails: function()
    {
        // console.log(`Username: ${name}`); // error name not defined

        console.log(`username: ${me.name}`);
        console.log(`username: ${this.name}`);
        console.log(this);
        

        // instead of normal fxn if I'll write arrow fxn then it'll give Username: undefined as it takes reference of "this" from surrounding scope not from global scope like normal fxn 
    }
};

console.log(me.name);
console.log(me.getMyDetails());
console.log(this);

// Next is constructor fxn it is needed as everytime we create a new Object we have to write all details(like name, age, isLoggedIn etc.) again and again instead we can setup a structure which by default has those values

// let prom = new Promise();
// let date = new Date();

// by doing this we can make multiple objects using single instances and it is only called constructor fxn (new keyword is used to make different context to save vvalue of "this")

function User(name, loginCount, IsSignnedIn, age)
{
    this.name = name;
    this.loginCount = loginCount;
    this.age = age;
    this.IsSignnedIn = IsSignnedIn;
    this.sayHi = function()
    {
        console.log(`Hi! ${name} how are you?`); // instead of name we can also write this.name which is better
    }

    return this; 
    // it returns by default if we do not do it explicitly then also we will not have a problem
}

let user1 = new User("Het", 12, true, 50);
let user2 = new User("chai", 51, false, 11);

console.log(user1);
console.log(user1.sayHi()); 
console.log(user1.constructor); // [Function: User]
console.log(user1.constructor()); // [Function: User]

console.log(user2);
console.log(user2.age);

// if the "new" keyword is not written then user1 values will be overwritten by user2

//theory
/* when we write these keywords everytime a new instance is formed which is just an empty Object nothing else 

step1 - forming of instance(empty obj)
step2 - constructor fxn is called due to new keyword it wraps up all arguments in it and returns
step3 - arguments are injected in this keyword
*/

// instance of example from mdn

function Car(make, model, year) 
{
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car);
console.log(auto instanceof Object);