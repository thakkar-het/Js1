//number
let answer="44"
console.log(typeof answer);
let valInNum=Number(answer);
console.log(typeof valInNum);
console.log(valInNum);//44

let score="11xyz";
console.log(typeof score);
let value=Number(score);
console.log(typeof value);
console.log(value);//NaN  not a number

let something=null;
console.log(typeof something);
let num=Number(something)
console.log(typeof num);
console.log(num);//0

let idk=undefined;
console.log(typeof idk);
let number=Number(idk);
console.log(typeof number);
console.log(number);//NaN

let what=true;
console.log(typeof what);
let val=Number(what);
console.log(typeof val);
console.log(val);//1 for true 0 for false

let why="het";
console.log(typeof why);
let valid=Number(why);
console.log(typeof valid);
console.log(valid);//NaN
//boolean
let log=1;
let booleanlog=Boolean(log);
console.log(typeof booleanlog);
console.log(booleanlog);//true for 1 and false for 0

let logg="";
let booleanlogg=Boolean(logg);
console.log(typeof booleanlogg);
console.log(booleanlogg);//false

let loggg="het";
let booleanloggg=Boolean(loggg);
console.log(typeof booleanloggg);
console.log(booleanloggg);//true

let lo=null;
let booleanlo=Boolean(lo);
console.log(typeof booleanlo);
console.log(booleanlo);//false

let lo2=undefined;
let booleanlo2=Boolean(lo2);
console.log(typeof booleanlo2);
console.log(booleanlo2);//false
//string
let val1=44;
console.log(typeof val1);
let strval=String(val1);
console.log(typeof strval);
console.log(strval);//"44"

let val2=true;
console.log(typeof val2);
let strval2=String(val2);
console.log(typeof strval2);
console.log(strval2);//"true"

let val3=null;
console.log(typeof val3);
let strval3=String(val3);
console.log(typeof strval3);
console.log(strval3);//"null"

let val4=undefined;
console.log(typeof val4);
let strval4=String(val4);
console.log(typeof strval4);
console.log(strval4);//"undefined"