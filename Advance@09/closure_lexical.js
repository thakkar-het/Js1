// lexical scoping is just that the variables defined in outer scope are also accesible by the inner scope elements and reverse gives error let's do some examples

// correct lexical

function outer()
{
    let what = "who";
    // console.log(secret); // error
    
    function Ques()
    {
        let secret = "sec";
        console.log(what);
    }
    function Q2()
    {
        // console.log(secret); // error
        console.log(what, "2");
    }
    Ques();
    Q2();
}
outer();
// console.log(what); // error

// error lexical

// function out()
// {
//     function inner()
//     {
//         let faltu = "Yogesh";
//     }
//     console.log(faltu);
// }
// out();


///////////////// Closure //////////////////////
// exp 1

function makeFunc()
{
    let name = "username";
    function displayName()
    {
        console.log(name);
    }
    return displayName;
}
let myFunc = makeFunc();
myFunc(); 
// this means when the function is returned then not only it's reference is passed it's whole lexical scope is passed so it won't give an error and will execute as expected

// exp 2 in same html file same name
