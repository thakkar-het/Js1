// Dates 

let myBday = new Date();
// console.log(myBday.toString()); // full date string
// console.log(myBday.toDateString()); // date portion only
// console.log(myBday.toLocaleDateString()); // date portion in local format
// console.log(myBday.toLocaleString()); // full date and time in local format
// console.log(myBday.toTimeString()); // time portion only
// console.log(myBday.toLocaleTimeString()); // time portion in local format
// console.log(typeof myBday);

// let anotherDate = new Date(2007 , 7 , 11 , 5 , 6 , 7); // year , month (0-11) , day , hours , minutes , seconds
let anotherDate = new Date("11-08-2007"); // month-day-year
// console.log(anotherDate.toLocaleString());

// timestamps to get difference between two times
let Timestamp = Date.now();
// console.log(Timestamp); // milliseconds since January 1, 1970
// console.log(anotherDate.getTime()); // time in millisecs from January 1, 1970 to anotherDate
//to convert in seconds divide by 1000 with Math.floor()
// console.log(Math.floor(Date.now() / 1000));



let newDate = new Date();
// console.log(newDate.getDate()); // day of the month (1-31)
// console.log(newDate.getMonth()); // month portion (0-11)
// console.log(newDate.getMinutes()); // minutes portion
// console.log(newDate.getMilliseconds()); // milliseconds portion
// console.log(newDate.getHours()); // hours in 24-hour format
// console.log(newDate.getFullYear()); // year in 4 digits
// console.log(newDate.getDay()); // day of the week
// console.log(newDate.getSeconds()); // seconds portion


// we can also modify locale string methods by passing options //// :)
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Asia/Kolkata",
  timeZoneName: "short",
};
console.log(newDate.toLocaleString("en-IN", options));
