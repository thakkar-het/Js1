// fetch('https://something.com').then().catch().finally();

let prom1 = new Promise( (resolve, reject) =>
{
    // Do an Async task
    //DB calls, cryptography, network calls
    setTimeout( () =>
        {
            console.log('Async Task is Complete');
            resolve(); 
            // without this the promise will not be completed or not connected to .then so we have to call this resolve method 
            // if this is not written then only Async Task is Complete will be printedand not prom 1 consumed if written both will be printed
        }, 1000)
} );

prom1.then( () =>
{
    console.log("prom 1 Consumed");
    // this fxn directly takes the returned value of above callback fxn
}) // .then is directly connection with 'resolve'

new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        console.log("Async 2");
        resolve();
    }, 1000)
}).then( () =>
    {
        console.log('Async 2 Consumed');
    } ) 
// this is another way of doing the same thing

let prom3 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve({name: "Het", Surname: "Thakkar", Address: "gujju", email: "example.com"});
    }, 1000);
});

prom3.then((user) =>
{
    console.log(user);
});

let prom4 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        let err = true;
        if(!err)
        {
            resolve({name: "Hitesh", PSWD: '1234', age: '30'});
        }
        else
        {
            reject("ERROR: SOMETHING WENT WRONG");
        }
    }, 1000)
})

prom4.then((then) =>
{
    console.log(then);
    return then.name;
})
.then((chain) =>
{
    console.log(chain);
})
.catch((err) =>
{
    console.log(err);
})
.finally(() =>
{
    console.log("Promise Is Either Resolved Or Rejected");
})

let prom5 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        let err = true;
        if(!err)
        {
            resolve({name: "Het", PSWD: 'PASSWORd', age: '18'});
        }
        else
        {
            reject("THIS IS THE END");
        }
    }, 1000)
})

// prom5.then((user) =>
// {
//     console.log(user);
// })
// .catch((msg) =>
// {
//     console.log(msg);
// })
// .finally(() =>
// {
//     console.log('always to be executed');
// })

// this is usual syntax but let's do something new here I.E async and await

async function prom5_consume()
{
    try 
    {
        let response = await prom5;
        console.log(response); 
    }
    catch (error) 
    {
        console.log(error);
    }

    /*
    let response = await prom5;
    console.log(response); 
    */
    // if err = false then this works perfectly but for err = true we have to do try and catch
}
prom5_consume();

// prep for next cls

// async function Fxn() 
// {
//     try 
//     {
//         let resp = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await resp.json();
//         console.log(data);    
//     } 
//     catch (error) 
//     {
//         console.log(error);
//     }
// }
// Fxn(); 

// let's do this using then and catch

fetch('https://api.github.com/users/thakkarhet')
.then((respon) =>
{
    return respon.json();
})
.then((something) =>
{
    console.log(something);
})
.catch((error) =>
{
    console.log(error);
})


/*

In Previous Times The Fetch was not available everything was done using XMLHttpRequest after that as development increase it became difficult so fetch library or API came to browser after that due to it's dependence on Web Streams API and AbortController Interface (we can stop the request)

after this to implement it in Node they decided to write the Stram API by own now the async await everything is avoided and just fetch is used as god

***  fetch return a promise  ****
*** 
A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
***
along with an url in string we can also pass many things like headers, cores, navigate, body, method etc. 
so fetch is capable of doing all majors works

*/

/*
Remember from Async module in photo 3 we have a special Seperate Queue for fetch() it is called fetch/priority/microtask Queue

methods like fetch present in these Queue are always executed first regardless of "ANY OTHER METHODS" it'll be like Idhar Mera Raj chalta hai (just kidding but it really has an high priority then all others)

For Below Theory In Better Version Check ScreenShot Added In The Module

Whenever is fetch used first 2 processes Occur Data and Web Browser/Node 

Web Browser/Node sents network request if accepted(resolve) it goes to Onfulfiled function of data part else(reject) to OnRejection of data

Data has 2 fields:-
OnFulfill[] and OnRejection[] as discussed above according to function which is filled in data is sent as response to the global memory
*/