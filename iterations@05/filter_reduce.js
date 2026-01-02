// forEach function does not return anything just does it's work and goes undefined so we need filter and other some fxns to perform some operations on it like

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newnums = nums.forEach( (num) => 
{
    if(num > 4)
    {
        return num;
    }
} );
// console.log(newnums); // undefined 

// now let's do a simple (filter*********************************)

let newnums1 = nums.filter( (num) =>
{
    if(num > 4)
    {
        return num;
    }
} );
// console.log(newnums1); // [ 5, 6, 7, 8, 9, 10 ] which was desired

// we can also do this with forEach but it would be lengthy like this

let newnums2 = [];
nums.forEach( (num) =>
{
    if(num > 4)
    {
        newnums2.push(num);
    }
} );
// console.log(newnums2); // [ 5, 6, 7, 8, 9, 10 ] which was desired

let people = 
[
    {name: "person1", IQ: "smart", birth_year: 1981, current_year: 2004},
    {name: "person2", IQ: "average", birth_year: 1992, current_year: 2008},
    {name: "person3", IQ: "dull", birth_year: 1999, current_year: 2007},
    {name: "person4", IQ: "average", birth_year: 1989, current_year: 2010},
    {name: "person5", IQ: "oversmart", birth_year: 2009, current_year: 2014},
    {name: "person6", IQ: "smart", birth_year: 1987, current_year: 2010},
    {name: "person7", IQ: "dull", birth_year: 1986, current_year: 1996},
    {name: "person8", IQ: "oversmart", birth_year: 2011, current_year: 2016},
    {name: "person9", IQ: "average", birth_year: 1981, current_year: 1989}
]
let somepeople = people.filter( (someone) => 
{
    if(someone.IQ === "average" && someone.birth_year >= 1985)
    {
        return someone;
    }
} );

// console.log(somepeople); // filtered people

// somepeople.forEach( (element) => 
// {
//     console.log(element.current_year);
// } );

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newnums3 = nums.map( (num) =>
{
    return (num + 10);
} );
// console.log(newnums3);
// we can use filter for some specific values return so if we want to iterate over all values we have to use map


// (chaining********************) 
// upto any extent we can do the next method takes values returned by the prev method
let newnums4 = nums.map( (num) =>
{
    return num * 10;
} )
.map( (num) =>
{
    return (num + 1);
} )
.filter( (num) =>
{
    if(num >= 50)
    {
        return num;
    }
    else;
} );
// console.log(newnums4);

// (reduce************************************)

let total = nums.reduce( (operator, myval) =>
{
    // console.log(`operator is ${operator} & my val is ${myval}`);
    return operator * myval;
}, 1);
// console.log(total);

let scart = 
[
    {
        name: "het",
        age: 18
    },
    {
        name: "meghavi",
        age: 45
    },
    {
        name: "oddy",
        age: 44.5
    },
    {
        name: "vadadu",
        age: 3
    }
];

// let agesum = 0;
// for(let i = 0 ; i < scart.length ; i++)
// {
//     agesum = agesum + (scart[i]).age;
// }
// console.log(agesum); 
// palash sir

let total_age = scart.reduce( (adder, item) =>
{
    return adder + item.age;
}, 0);
console.log(total_age);
// hitesh sir