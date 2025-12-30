// if(condition){} we'll also use else if and else whenever needed 


if(2 === 2) // true 
{
    // code in this scope will execute
}
if(2 === "2") // false 
{
    // code in this scope will not be executed
}

// conditional operators
// >, <, <=, >=, ==, !=, ===, !==

// let temp = 40;
// if(temp < 50)
// {
//     console.log(`temp is less than 50`);
// }
// else 
// {
//     console.log(`temp is not less than 50`);
// } // this is conditional test if we didn't write "else" then both console.log(); will be printedc which we do not want

let score = 200;
if(score > 100)
{
    let power = "fly";
    // console.log(`user power = ${power}`);
}
// console.log(`user power = ${power}`); // here error will come as power is only available in scope of "if"

// let bal = 1000;

// // implicit scope of "if"
// if(bal > 500)
//     console.log(`rich`),
//     console.log(`very rich`);
// // so instead of using {} we can directly write code using "," at end of each line and ";" at the end of scope but it's not a good practice to do this so simply use {}  
// if(bal < 500)
// {
//     console.log(`less than 500`);
// }
// else if(bal < 600)
// {
//     console.log(`less than 600`);
// }
// else if(bal < 750)
// {
//     console.log(`less than 750`);
// }
// else if(bal < 900)
// {
//     console.log(`less than 900`);
// }
// else
// {
//     console.log(`big value`);
// }

let userlogin = true;
let debcard = true;
let loginfromgoogle = false;
let loginfromemail = true;

if(userlogin && debcard && 2==2) // in case of && all statements must be true
{
    console.log(`allowed`);
}

if(loginfromemail || loginfromgoogle) // in case of || anyone statements should be truee to make whole condition true
{
    console.log(`login detected`);
}