let myObj = 
{
    name: "het",
    game: "javascript",
    tag: "master hehe"
};
for (const key in myObj) 
{
    // console.log(key);
    // console.log(myObj[key]);
    
}
let myarr = ["het", "javascript", "master hehe", "something"];
for (const key in myarr) 
{
    // console.log(key);
    // console.log(myarr[key]);
}

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (const key in map) 
{
   console.log(key);
}
// map is not iteratable we can use forof loop but forin loop will give nothing