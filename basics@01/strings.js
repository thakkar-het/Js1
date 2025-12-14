//MY STRINGS
let name = "het";
let surname = "thakkar";
let age = 21;
// console.log(name + " " + surname + " " + age); // old method not recommended //

// console.log(`my name is ${name} my surname is ${surname} my Age is ${age}`); // new method recommended
let friendname = new String("JaYeSh"); // string object and another way to create string
//console.log(friendname); // prints the object as [String: 'jay']

//STRING METHODS
// console.log(friendname.__proto__); // prints string object
// console.log(friendname[2]); // prints y (indexing)
// console.log(friendname.length); // prints length of string
// console.log(friendname.toLowerCase()); // prints string in lowercase
// console.log(friendname.toUpperCase()); // prints string in uppercase
// console.log(friendname.charAt(3)); // prints character at index 3
// console.log(friendname.indexOf("e")); // prints index of first occurrence of 'e' 
// console.log(friendname.lastIndexOf("a")); // prints index of last occurrence of 'a'
// console.log(friendname.replace("JaYeSh", "Jay")); // replaces 'JaYeSh' with 'Jay'
// console.log(friendname);

let anothername = "someone@iitj.ac-in";
let somename = "     some name with spaces     ";
// console.log(anothername.substring(2 , 8)); // prints substring [from index 2 to 7] *
// console.log(anothername.substring(2 , 8)); // prints substring [from index 2 to 7] *
// console.log(anothername.slice(-20 , 3)); // prints substring [from length-20 to index 2] *
// console.log(anothername.slice(3 , -5)); // prints substring [from index 3 to length-5] * 
// so slice can take negative indexing but substring cannot
// if we give negative indexing in substring then it considers it as 0 it'll be like muje fadak nahi padta
// console.log(somename);
// console.log(somename.trim()); // removes whitespace from start and end of string
let myurl = "https://het.com/hmdt%100thakkar";
let newurl = myurl.replace("%100" , "--");
// console.log(myurl);
// console.log(newurl);
// console.log(myurl.includes(hmdt)); // error because hmdt is not defined
// console.log(myurl.includes("hmdt")); // checks if 'hmdt' is present in myurl and returns boolean

let s_to_a = "my name is het thakkar my father name is dharmendrabhai and my mother name is meghaviben";
let words = s_to_a.split(" "); // splits string into array of words based on space
// console.log(words); // prints array of words
// console.log(words[6]); // prints 7th word (index 6)
let chars = s_to_a.split(""); // splits string into array of characters
// console.log(chars[16]); //  prints 17th character (index 16)
let new_s_to_a = s_to_a.split(); // copies the whole string into an array as a single element
// console.log(new_s_to_a); // prints the whole string as single element array
