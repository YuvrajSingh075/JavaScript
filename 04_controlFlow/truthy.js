const username = "hi@tesh.in";

if(username){
    console.log("User have email");
} else{
    console.log("User don't have email");
}

// Falsy values-
// 0, -0, false, "", bigint, 0n, null, undefined, Nan;

//Truthy values-
// "0", 'false', " ", [], {}, function(){};

const userEmail = [];
if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalesing Opertaor(??): null, undefined;
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Oprator-
// condition ? true : false
const iceTea = 100;
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80") 