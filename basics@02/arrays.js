// arrays

let myArr = [0 ,1, 2, 3, 4, 5];
// console.log(myArr[0]);
// array may also contain different datatypes of elements
let mixedArr = [0, "hello", true, null, undefined, {name: "John"}, [1, 2, 3]]; // number, string, boolean, null, undefined, object, array
//array indexing starts from 0 and are resizable 
// all array copy methods create a shallow copy I.E both array have same reference 
let myArr2 = new Array(1 , 2, 3, 4, 5); // another way to create array using Array constructor
// console.log(myArr2[2]);

// array methods
// myArr.push(11);
// myArr.push(8); // adds element at the end
// console.log(myArr);
// myArr.pop(); // removes element from the end
// console.log(myArr);

// myArr.unshift(11); // adds element at the beginning shifting all other elements to the right but gives very high time complexity
// console.log(myArr);
// myArr.shift(); // removes element from the beginning shifting all other elements to the left but gives very high time complexity
// console.log(myArr);

// console.log(myArr.includes(9)); // checks if element is present in array or not returns boolean
// console.log(myArr.indexOf(3)); // returns index of element if present else returns -1

let newArr = myArr.join(); // converts array to string with , as separator
// console.log(newArr);
// console.log("A" , newArr , typeof newArr);

let myn1 = myArr.slice(1, 4); // creates new array from index 1 to 3 (4-1) , original array remains unchanged
// console.log(myn1);
// console.log(myArr);

let myn2 = myArr.splice(1 , 4); // removes elements from index 1 to 4 (4-1) , original array is changed
// console.log(myn2);
// console.log(myArr);
let myn3 = myArr.splice(0 , 1 , 10 , 11 , 12, 13 , 14 , 15); // removes 1 element from index 0 and adds 10,11,12,13,14,15 at index 0 , original array is changed
// console.log(myn3);
// console.log(myArr);

let Arr1 = [1, 2, 3];
let Arr2 = [4, 5, 6];
let Arr3 = Arr1.concat(Arr2); // merges two arrays and returns a new array
// console.log(Arr3);

// Arr1.push(...Arr2); // spreads elements of Arr2 and adds them to Arr1
// console.log(Arr1);

// Arr1.push(Arr2); // adds Arr2 as a single element to Arr1
// console.log(Arr1);
// push changes the original array while concat creates a new array

// we can also use this method to get seperate elements of so many arrays

let mergedArr = [...Arr1, ...Arr2, ...[7, 8, 9]]; // spreads elements of Arr1 , Arr2 and another array and creates a new array
// console.log(mergedArr);
let Arr4 = [1, 2, [3, 4], 5, [6, 7 ,[1, 3]] ,9]; // nested array
let flatArr = Arr4.flat(Infinity); // flattens the array to a single level , Infinity used to flatten all levels of nested arrays
// console.log(flatArr);

// console.log(Array.isArray("HMDT")); // checks if the given value is an array or not returns boolean
// console.log(Array.from("HMDT")); // creates an array from the given string or iterable object
// console.log(Array.from({name: "THAKKAR"})); // creates an array from the given object but since object is not iterable it returns empty array

//array from different values
let n1=10, n2=20, n3=30;
let arrFromValues = Array.of(n1, n2, n3, "HET" ,true); // creates an array from the given values
console.log(arrFromValues);