// After ES6

class User
{
    constructor(username, email, password, age)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        this.age = age;
    }
    encryptPass()
    {
        return `${this.password}Het`;
    }
    ToUpper()
    {
        return `${this.username.toUpperCase()}`;
    }
}
let test = new User("Test", "Test@com.google", "something", 45);

console.log(test.encryptPass());
console.log(test.ToUpper());

// Behind the scene

// function User(username, email, password, age)
// {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//     this.age = age;
// }
// User.prototype.encryptPass = function()
// {
//     return `${this.password}Het`;
// }
// User.prototype.ToUpper = function()
// {
//     return `${this.username.toUpperCase()}`;
// }
// let Test1 = new User("Test1", "Test1@com.google", "something", 45);

// console.log(Test1.encryptPass());
// console.log(Test1.ToUpper());


// Inheritance
class Person
{
    constructor(Name)
    {
        this.Name = Name;
    }
    LogMe()
    {
        console.log(`UserName is ${this.Name}`);
    }
}

class teacher extends Person
{
    constructor(Name, Email, Something)
    {
        super(Name); 
        // this helps us reduce the chutiyapa of "call" automatically this does it
        this.Something = Something;
        this.Email = Email;
    }

    addCourse()
    {
        console.log(`New Course Was Added By ${this.Name}`);
    }
}

let Hitesh = new teacher("Hitesh", "chai@gmail.com", "IDK");

Hitesh.addCourse();
Hitesh.LogMe();

let Chai = new Person("Masala_Chai");

Chai.LogMe();
// Chai.addCourse(); // Error teacher is inheriatnce of Person not inverse is true

console.log(Chai == Hitesh);
console.log(Hitesh == teacher);
console.log(Hitesh instanceof teacher); // true
console.log(Hitesh instanceof Person); // true


// Static Properties

class Het 
{
    constructor(Naam)
    {
        this.Naam = Naam;
    }
    Logggme()
    {
        console.log(`Username = ${this.Naam}`);
    }
    static createID()
    {
        return `123`; // assume unique ID everytime also we can write Math.random but gmasti toh dekho :)
    }
}

let Test3 = new Het("Kuch Bhi");
// console.log(Test3.createID());

class Father extends Het
{
    constructor(Naam, email)
    {
        super(Naam);
        this.email = email;
    }
}

let Iphone = new Father("Iphone", "phone.com");
Iphone.Logggme();
console.log(Iphone.createID());