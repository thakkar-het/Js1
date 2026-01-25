// There are 2 types of Array in JS

// 1. Continuous 
// 2. Holey

// There are 3 types of optimization in Array
// 1. SMI(Small Integer)
// 2. Packed element
// 3. Double (float, string, function)

// Everything in Array is called element *****

let my_arr1 = [1, 2, 3, 4, 5];
// Packed SMI elements Most Optimized type (only numbers are allowed not decimal also)
my_arr1.push(6.0);
// Now it became Packed Double type elememts
my_arr1.push("7");
// Now it became Packed elememts this means now it can contain any type of element:- fxn, obj, numbers etc.

// Once the optimization is down graded then it is nearly impossible to make it again upgrade

my_arr1[10] = 11;
// Holey elements
console.log(my_arr1);
console.log(my_arr1.length);
console.log(my_arr1[9]);
console.log(my_arr1[15]);

/* Process How Array Finds a value on a particular index
1. Bound Check
2. hasOwnProperty(my_arr1, 9)
3. hasOwnProperty(my_arr1.prototype, 9)
4. hasOwnProperty(Object.prototype, 9);

*** This hasOwnProperty is very costly operation so is said that holes are very expensive 
isliye optimization ki band baj jati hai
*/

let my_arr2 = [1, 2, ,, 4, 5]
// Holey SMI type

// Order of Optimization :- **
// SMI > DOUBLE > normal PACKED > H_SMI > H_DOUBLE > H_PACKED

// once downgrading is done like deleting 3 from arr1 to form arr2 then it becomes Holey now even if we add 3 back again then also it will not been upgarded and never come back to normal optimization

let my_arr3 = new Array(3);
// just 3 holes -> Holey_SMI elements the max(m) optimiztion by compiler possible is given

my_arr3[0] = '1'; // HOLEY_ELEMENTS forever
my_arr3[1] = '2'; // HOLEY_ELEMENTS forever
my_arr3[2] = '3'; // HOLEY_ELEMENTS forever
// Instead of doing this we can make array in more Optimized way

let my_arr4 = []; // SMI
my_arr4.push('1'); // normal packed better optimized
my_arr4.push('2'); // normal packed better optimized
my_arr4.push('3'); // normal packed better optimized
// here my_arr4 == my_arr3 but optimiztionis different

let my_arr5 = [1, 2, 3, 4 ,5];

my_arr5.push(NaN); // galti se bhi ye dono mese koi bhi agar daal diya array me toh woh PACKED_DOUBLE hai ab

my_arr5.push(Infinity); // there is no sense of doing this just to keep in mind

// it is recommended to use by default functions instead of own copy fxns which are genrally more optimized which improves code efficiency