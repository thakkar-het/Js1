function SetName(username)
{
    // complex DB calls
    this.username = username;
    console.log("Mai Idhar hu");
}
function Create(username, email, password)
{
    SetName.call(this, username);

    this.email = email;
    this.password = password;
}
let Het = new Create("Het", "Something@mail.com", "PASSword");

console.log(Het); 
// only email and password are being printed if .call is not written as SetName call ho hi nahi raha hai sirf refrence gaya hai toh hume usse explicity call krna pdta hai aise cases mai aur jab uska kaam ho jata hai tooh uska EC callstack se nikal jata hai toh uska reference hold rakhne k liye call krte hai and uski value function ke thiss me daalne ke liye uske parameter ke sath "this" dena padta hai