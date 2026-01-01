/**
 * For-of Loop theory
 * Key Characteristics:
 * - Iterates over VALUES of an iterable, not indices
 * - Works with any iterable object (arrays, strings, NodeLists, etc.)
 * - Cannot access the index directly (use for-in or traditional for loop if needed)
 * - Supports break and continue statements
 * - Cleaner and more readable than traditional for loops
 * - Automatically handles the iteration protocol
 * */

let myarr = [1, 2, 3, 4, 5];
// for (const element of object) 
// {

// } // syntax

for(let nums of myarr)
{
    // console.log(nums);
}
let my_greets = "my name is het !"
for (let chars of my_greets) 
{
    // console.log(`chars of my greets are ${chars}`);
}

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// console.log(map.get("a")); // 1
map.set("a", 97);
// console.log(map.get("a")); // 97 
// console.log(map.size); // 3

// map.delete("b");
// console.log(map.size); // 2

// if we again give the same value then it will not be entered in the map
map.set("a", 97);

// console.log(map); // prints whole map with it's size

/**
 * Map Theory
 * Key Characteristics:
 * - Stores key-value pairs, similar to objects but with important differences
 * - Keys can be ANY data type (objects, functions, primitives), not just strings
 * - Maintains insertion order
 * - Has a size property to get the number of key-value pairs
 * - Better performance for frequent additions/deletions
 * - Provides methods: set(), get(), has(), delete(), clear()
 * - Iterable - can use for-of loops
 * - WeakMap variant allows garbage collection of keys
 * - also we do not have any duplicate values in it everthing is unique
 * */

// we can apply forof loop on this by destructuring it in that

for (const [element, value] of map) 
{
    console.log(`value of ${element} is ${value}`);
}

/*
let myObj = 
{
    name: "het",
    surname: "thakkar",
    num: 4
};
for (const [ename, vname] of myObj) 
{
    console.log(ename);
    console.log(vname);
    // TypeError: myObj is not iterable
    // so objects are not iterable in for of ********
}
*/