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

fetch('https://jsonplaceholder.typicode.com/users')
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