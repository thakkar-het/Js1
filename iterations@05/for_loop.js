// for

let variable;
for(variable = 0 ; variable <= 10 ; variable++)
{
    // if(variable == 4)
    // {
    //     console.log(`4 is my fav num`);
    // }
    // console.log(variable);
}
let i, j;
// for(i = 0 ; i <= 3 ; i++)
// {
//     console.log(`outer loop ${i}`);
//     for(j = 0 ; j <= 3 ; j++)
//     {
//         // console.log(`inner loop ${j} & ${i}`);
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

let myarr = ["h", "m", "d", "t", 'hehe'];
for(i = 0 ; i <= myarr.length ; i++)
{
    // console.log(myarr[i]);
} // last value will be undefined as we went out of bounds

// break and continue

// for(i = 0 ; i <= 15 ; i++)
// {
//     if(i == 8)
//     {
//         console.log(`${i} is detected now the program is broken out of this loop`);
//         break;
//     }
//     console.log(`val of index is ${i}`);
// }


for(i = 0 ; i <= 15 ; i++)
{
    if(i == 8)
    {
        console.log(`${i} is detected now this value will be skipped or not used further i.e not printed in console but loop will be continued after that value`);
        continue;
    }
    console.log(`val of index is ${i}`);
}