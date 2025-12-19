const user = 
{
    name: "Het",
    age: 18,
    address: "Gujarat",
    GreetMsg: function()
    {
        console.log(`Hello ${this.name}, I know you are ${this.age} years old and you live in ${this.address}.`);
        console.log(this);
    }
};
// user.GreetMsg();
// user.name = "Het Thakkar";
// user.GreetMsg();

// console.log(this); // In global scope, 'this' refers to the global object (window in browsers, global in Node.js) so it prints the global object {}
function code()
{
    console.log(this);
}
// code(); // here "this" prints so many things that is because in node.js "this" refers to module.exports which contains a lot of properties and methods

function one()
{
    let username = "HMDT";
    console.log(this.username);
}
// one();

const two = function()
{
    let username = "HMDT";
    console.log(this.username);
}
// two();

const three = () =>
{
    let username = "HMDT";
    console.log(this.username);
    console.log(this);
}
// three();

const four = (n1, n2) =>
{
 return n1 + n2;
}
console.log(four(3, 4));

/* or we can also directly do implicit return like this:

const four = (n1, n2) => n1 + n2;
console.log(four(3, 4));
it will give the same result 7
*/

// if we want to return an object using arrow function then we have to wrap the object in parentheses like this:
const getUser = () => ({ name: "Het", age: 18 });
console.log(getUser()); // just doing this => { name: 'Het', age: 18 } will give us nothing but undefined because JS thinks that the curly braces are for function body not for object so we have to wrap it in parentheses to tell JS that its an object

// if there is only one parameter then we can skip the parentheses too like this:
const square = n => n * n;
console.log(square(5));