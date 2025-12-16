//if we create an object using object literal syntax then it is not a singleton but 
// if we create it using constructor function then it is a singleton

//object literals

let mySym = Symbol("myid1"); // to use like [mySym] in the object we have to define it here otherwise 
// it will throw an error in that case we have to use the above method of symbol written in object

let myObj = 
{ 
    name: "HET",
    pNo: 753984106,
    email: "hetthakkar@google.com",
    location: "Gujarat",
    IsLoggedIn: true,
    LastLoginTime: [2, 5, 4, 1, 8],
    // mySym: Symbol("myid"), // we can also do this by
    [mySym]: "myid", // this is better way to define symbol property
    "company name": "IITJ"
};

// console.log(myObj.location); // accessing object property using dot notation

// console.log(myObj["email"]); // accessing object property using bracket notation // useful when property name is dynamic 

// this is better when property name has space in it or is written in double quotes // for ex

// console.log(myObj["company name"]);

// console.log(myObj."company name"); // this will give error

// console.log(myObj[mySym]);

// we can chhange the value of anything of object by directly overwriting it
myObj.location = "Mumbai";

// and we can also avoid any property from being changed

// Object.freeze(myObj); // this will make the object immutable
// myObj.location = "Delhi"; // this will not change the location property as object is freezed and also not give any error

// console.log(myObj);

// we can also add new property to the object
myObj.Greeting = function(){
    console.log("Hello there!");
}
myObj.Greeting2 = function(){
    console.log(`Hello there!, ${this.name}, I know you phonne phone number it is ${this.pNo}`);
    
}
// console.log(myObj.Greeting); // this will give the function definition
// console.log(myObj.Greeting()); // this will call the function and give output
// console.log(myObj.Greeting2());

// we can also delete any property from the object
delete myObj.IsLoggedIn;
// console.log(myObj);

// constructor function and singleton objects

let myObj2 = new Object(); // this is an empty object created using constructor function
// console.log(myObj2);
let myObj3 = {} 
//obj2 and obj3 are the same the diffrence is that obj 2 is singleton object created using constructor function
// and obj3 is created using object literal syntax

// nested objects
let myObj4 = 
{
    email: "some@some.com",
    familyname:
    {
        username: 
        {
            fname: "first name",
            lname: "last name",
            mName: "middle name"
        }
    } 
}
// console.log(myObj4.familyname); // accessing nested object property

// merging objects
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};

let mergedObj = Object.assign({}, obj1, obj2, obj3); // merging multiple objects into one using assign method
// first parameter is the target object where we want to merge other objects
// rest are the source objects
// if we do not give that first empty object then obj1 will be modified to include obj2 and obj3 properties

// console.log(mergedObj);

// another way to merge objects using spread operator
let mergedObj2 = {...obj1, ...obj2, ...obj3};
// console.log(mergedObj2);

//if we do like
let mergedObj3 = {obj1, obj2, obj3}; // this will create an object with properties obj1, obj2, obj3
// console.log(mergedObj3);

// to access multiple objects by array then wecan do like this
let arrayOfObjects =
[
    {z: "a", y: "b"},
    {x: "c", w: "d"},
    {v: "e", u: "f"}
];

// console.log(arrayOfObjects[1].x);

let newObj = {name: "HET", age: 21, city: "Mumbai"};
// console.log(Object.keys(newObj)); // this will give an array of keys of the object
// console.log(Object.values(newObj)); // this will give an array of values of the object
// console.log(Object.entries(newObj)); // this will give an array of key value pairs of the object as arrays

// to confirm whether a property exists in an object or not
console.log(newObj.hasOwnProperty("age"));
console.log(newObj.hasOwnProperty("property_does_not_exist"));