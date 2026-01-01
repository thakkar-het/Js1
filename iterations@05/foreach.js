// for each

let coding = ["javascript", "cpp", "css", "ruby", "python"];

coding.forEach( function (item) 
{
    // console.log(item);
} );
// function in "()" is called callback function we do not need to give it any name
// we can also write arrow fxn in it like
coding.forEach( (value) => 
{
    // console.log(value);
} );

function printme(item)
{
    console.log(item);
};
// coding.forEach( printme ); // instead of executing we just have to give it's reference
// printme(coding.forEach); //this gives [Function: forEach]
coding.forEach( (item, index, arr) => 
{
    // console.log(item, index, arr);
});
// with item it also has index of it in array and the whole array 

let newarr = 
[
    {
        lang: "gujju",
        land: "gujarat"
    },
    {
        lang: "marathi",
        land: "muumbai"
    },
    {
        lang: "hindi",
        land: "bharat"
    }
];

newarr.forEach( (item, index, arr) =>
{
    if(index == 2)
    {
        console.log(`third person lives in ${item.land}`);
    }
} )