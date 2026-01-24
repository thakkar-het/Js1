class User
{
    constructor(email, pswd)
    {
        this.email = email;
        this.pswd = pswd;
    }


    // get pswd()
    // {
    //     return this.pswd.toUpperCase();
    // }
    
    
    // set pswd(value)
    // {
    //     this.pswd = value.toUpperCase();
    // } 
    
    // only writing like this gives an error of Maximum call stack size exceeded due to a confusing race between constructor and set/get to define value of pswd whiich we do not need
    
    get email()
    {
        return this._email.toUpperCase();
    }

    set email(valu)
    {
        this._email = valu.toUpperCase();
    }

    get pswd()
    {
        return `${this._pswd.toUpperCase()} hMdT`;
    }
    set pswd(val)
    {
        this._pswd = val.toUpperCase(); 
    }
}

let Het = new User("Het@google.com", "myPsWd44"); // set
console.log(Het.pswd); // get

console.log(Het.email);

// old style using fxn before we did as class //////////////////

function Me(name, surname)
{
    this._name = name;
    this._surname = surname;

    Object.defineProperty(this, 'name', 
        {
            get: function()
            {
                return this._name.toUpperCase();
            },
            set: function(values)
            {
                this._name = values;
            }
        }
    )
    Object.defineProperty(this, 'surname', 
        {
            get: function()
            {
                return this._surname.toUpperCase();
            },
            set: function(va)
            {
                this._surname = va;
            }
        }
    )
}

let Chai = new Me("Chai", "AurJS");
console.log(Chai.name);
console.log(Chai.surname);

// Another method to do the same bakchodi using Objects

let teacher = 
{
    _some: "Hard",
    _Something: "Coded_value",

    get some()
    {
        return this._some.toUpperCase();
    },
    set some(v)
    {
        this._some = v.toUpperCase();
    },
    get Something()
    {
        return this._Something.toUpperCase();
    },
    set Something(v1)
    {
        this._Something = v1.toUpperCase();
    }
}
let Hitesh = Object.create(teacher);

console.log(Hitesh.some);
console.log(Hitesh.Something);

// "_" gives us private property feature