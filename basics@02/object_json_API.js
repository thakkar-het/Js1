// Destructuring with different variable names
let course = 
{
  title: "JavaScript Basics",
  duration_in_hrs: 2,
  instructor: "Het"
}
// instead of writing full like course.duration_in_hrs we can use bracket notation
let {duration_in_hrs: time} = course;
console.log(time);


//something with react

// let navbar = ({company} /*instead of props.company*/) => 
// {
    
// }
// navbar({company: "ABC"});


// JSON is just an object without a name in front of it // in string format

/* it looks like this
{
  "title": "JavaScript Basics",
  "duration_in_hrs": 2,
  "instructor": "Het"
}

or something like this
[
{},
{},
{}
]
*/

// api is just a link to get some data from server in json format