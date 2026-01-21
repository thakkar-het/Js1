let Name = "Het";
let Name1 = "Het    "; // challenge is to make our own method for which it removes all unecassary spaces in string and give it's length named "truelength"
console.log(Name.length);
// console.log(Name1.truelength); // undefined

let fam = ["Het", "ommy", "oddy", "HMDT"];
let Special = 
{
    Het : "IITIAN",
    ommy : "Bhakhari pizza",
    oddy : "MD colors",
    HMDT : "All of the above",

    getHetSpecial : function()
    {
        console.log(`Het's speciality is ${this.Het}`);
    }
}
Object.prototype.something = function()
{
    console.log(`I'm Present in All Objects`);
}
Special.getHetSpecial();
Special.something();
fam.something(); 
// this justifies that array is heirarchy of Object now let's check the inverse

Array.prototype.some = function()
{
    console.log(`I'm In Array`);
}

fam.some();
// Special.some(); // error

// Inheritance
let human = 
{
    username: "Someone",
    email: "Myself@google.com"
}
let Teacher = 
{
    Youtube: true
}
let TA = 
{
    is_Available: false
}
let support = 
{
    Assignment: "Coding Work",
    full_Time: true,
    __proto__: TA // for linking different objects
}
Teacher.__proto__ = human; // Old style Approach

// Modern syntax
Object.setPrototypeOf(TA, Teacher) // does same thing as __proto__
// this is very deep behind the scene talk but take lite for now just understand the concept

let finalTest = "I'mTheBest     ";
String.prototype.truelength = function()
{
    console.log(`${this}`);
    console.log(this);
    // console.log(`${this.name}`); // depcrecated obsolete property so ignore it
    console.log(`True length is ${this.trim().length}`);
}
finalTest.truelength();
"ChaiAurCode".truelength();