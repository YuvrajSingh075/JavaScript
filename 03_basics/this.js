const user = {
    username: "Hitesh",
    price: 1999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}
user.welcomeMassage();
user.username = "Sam";
user.welcomeMassage();
console.log(this);

// let chai = function(){
//     let username = "Hitesh";
//     console.log(this.username) // this keyword can't use in function.
// }
// chai();

let chai = ()=>{
    let username = "Hitesh";
    console.log(this.username)
}
chai();

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({username: "Hitesh"});
console.log(addTwo(2,5));