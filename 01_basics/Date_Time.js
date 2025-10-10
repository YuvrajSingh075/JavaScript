//``````````````````````Dates```````````````````````````
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// let myCreatedate = new Date(2023, 0, 23);
// let myCreatedate = new Date(2023, 0, 23, 5,30);

let myCreatedate = new Date("2023-01-23");
console.log(myCreatedate.toDateString());
console.log(myCreatedate.getDate());
console.log(myCreatedate.getDay());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getTime())

newDate.toLocaleString('default',{
    weekday : "long"
})