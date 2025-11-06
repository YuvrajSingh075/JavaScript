const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval;
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce( (cur, curval) => cur + curval, 0)
console.log(myTotal);

const shoppingCard = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "mob development course",
        price: 5999
    },
    
    {
        itemName : "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCard.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);