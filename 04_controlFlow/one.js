const isloggedin = true;
const temprature = 41;

//>, <, >=, <=, ==, !=, ===, !==
if(temprature < 50){
    console.log("Temp is less than 50")
}else{
    console.log("Temp is grater than 50")
}

const score = 200;

if(score > 100){
    let power = "fly";
    console.log(`User power can ${power}`);
}
// console.log(`User power can ${power}`);

const balance = 1000;
// if(balance > 500) console.log("bal is less than 1000"); // one line if statement

if(balance < 500){
    console.log("bal less than 500 ")
} else if(balance < 750){
    console.log("bal less than 750 ")
} else if(balance < 900){
    console.log("bal less than 900 ")
} else{
    console.log("bal less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

