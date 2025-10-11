//Singleton
//Object.create

// objects.literals
const mySym = Symbol("key1")
const JsUsers = {
    name: "Hitesh",
    "fullname": "Hitesh Chaudhry",
    [mySym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Hitesh@google.com",
    isloggedIn : false,
    lastLoginday : ["Saturday", "Sunday"]
}
console.log(JsUsers.email);
console.log(JsUsers["email"]); 

console.log(JsUsers.fullname);
console.log(JsUsers.mySym);

JsUsers.email = "hitesh@chatgpt.com";
// Object.freeze(JsUsers);
JsUsers.email = "hitesh@microsoft.com";
console.log(JsUsers.email);

JsUsers.greetingOne = function(){
    console.log("Hello Js Users");
}
console.log(JsUsers.greetingOne());

JsUsers.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`)
}
console.log(JsUsers.greetingTwo());
