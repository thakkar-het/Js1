// stack memory(primitive , copy) and heap memory(non-primitive , reference)

//stack
let familyName= "Het's Family"
let SameFamily= familyName

console.log(familyName) 
console.log(SameFamily) 

familyName= "ommy and oddy 's Family"

console.log(familyName) 
console.log(SameFamily)
//original value of familyName is not changed because 
// only the copy of the value is stored in SameFamily and not in the original variable

//heap

let user1={
    email:"user@something.com", 
    upi:"user@bank"
}
let user2=user1
//here user2 is not a copy of user1
//it is a reference to the same object in the heap memory

user2.email="het@google.com"
console.log(user1.email) 
console.log(user2.email)
//both user1 and user2 email is changed because both are pointing to the same object in the heap memory