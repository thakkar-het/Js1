//javascript is a dynamically typed language 
// primitive

//7 types
//string
//number  //decimal, float, integer
//boolean
//null
//undefined
//bigint  // very large integers or scientific values
//symbol

// examples
let name="hmdt"  //string
let age=22        //number
let ageValue=22.5   //number
let isLoggedIn=true  //boolean
let state=null      //null
let accId;         //undefined
let accId1=undefined  //undefined 
let bigInt=1234567890123456789012345678901234567890n  //bigint
let id=Symbol("123")   //symbol
let id1=Symbol("123")  //symbol
//console.log(id===id1);


//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof ageValue);
//console.log(typeof isLoggedIn);
//console.log(typeof state);
//console.log(typeof accId);
//console.log(typeof bigInt);
//console.log(typeof id);
//console.log(typeof id1);





//non-primitive

//array

let arr=["het","ommy","oddy","hmdt"] 
//can have multiple data types inside array
let arr1=["het",22,true,null,undefined,1234567890123456789012345678901234567890n,Symbol("123")]

//objects(key value pairs,kept between {})

let object={
    name:"hmdt",
    age:22,
    //can also have array,boolean,objects etc. inside object
}

//functions
const myFun=function()
{
    console.log("hello world");
}
console.log(typeof myFun);//function or object function
console.log(typeof arr);
