function sayMyName(){
    console.log("Yuvraj Singh");
}
sayMyName();

function addTwoNum(num1,num2){
     console.log(num1 + num2)
}
addTwoNum(2,"5");

function addTwoNum(num1,num2){
    // let result = num1 + num2;
    // return result
    // console.log("Hitesh") //this not allowed,if return element is assigned.
    return num1 + num2; 
}

const result = addTwoNum(3,5);
console.log("result : ",result)

function loginUserMassage(username){
    if(!username){
        console.log("Please enter valid user")
    }
    return `${username} just login`;
}
console.log(loginUserMassage())

function calculateCardPrice(item1,item2,...items){
    return items;
}
console.log(calculateCardPrice(100,200,450,538,2000))

const User = {
    username: "Hitesh",
    price: 199,
};
function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObj(User)
handleObj({
    username : "sam",
    price : 199
})

const myNewArray = [100,200,300,400];
function returnSecondVal(getArray){
    return getArray[1]
}
// console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([100,3000,400,432]));