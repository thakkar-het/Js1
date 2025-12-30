// Switch case syntax:- 
// switch (key) 
// {
//     case value:
        
//         break;
//     default:
//         break;
// }
// example
let month = 3; 

switch (month) 
{
    case 1:
        console.log(`january`);
        break;
    case 2:
        console.log(`feb`);
        break;
    case 3:
        console.log(`march`);
        break;
    case 4:
        console.log(`apr`);
        break;
    case 5:
        console.log(`may`);
        break;
    case 6:
        console.log(`june`);
        break;
    case 7:
        console.log(`july`);
        break;
    case 8:
        console.log(`aug`);
        break;
    case 9:
        console.log(`sept`);
        break;
    case 10:
        console.log(`oct`);
        break;
    case 11:
        console.log(`nov`);
        break;
    case 12:
        console.log(`dec`);
        break;
    default:
        console.log("Invalid month");
}
// if we do not use "break" then all cases after that matching case would also execute which we do not want
// we can put any datatype in case like to get string instead of number we can aslo write case "January": and so on
