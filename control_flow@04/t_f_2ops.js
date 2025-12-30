// always false values (falsy)
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// all other values are truthy values but some surprising ones are :-
// "0", "false", " ", [], {}, function(){}

// to check empty arr
let anyarr = [];
if(anyarr.length == 0)
{
    console.log("array is empty");
}

// to check empty obj
let anyobj = 
{
    name: "Het",
    num: 18 
};
if(Object.keys(anyobj).length == 0)
{
    console.log("obj is empty");
}
// console.log(Object.entries(anyobj)); // keys, values (recap)
// false == 0, false == "", 0 == "" // these are true statements just to remember not much of use right now

// Nullish Coalescing Operator (??): 
// used just to avoid null and undefined values from any source to prevent unknown behaiviour on the user end or the database

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? undefined ?? 20 ?? 10; // itstops where it gets some good value :)
console.log(val1);

// Terniary Operator condition ? true : false
let Price = 500;
Price >= 450 ? console.log(`expensive`) : console.log(`affordable`);