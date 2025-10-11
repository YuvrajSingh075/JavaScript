let myArr = [1,2,4,5,3,"Yuvi",[2,3,4],true,"#"];
let myHeroes = ["IronMan","Thor","Hulk"]
console.log(myArr);

let newArr = new Array(1,3,5,7,8);
console.log(newArr[1]);

//````````````````ArrayMethod```````````````````````````
newArr.push(9); // add the element in array.
console.log(newArr);
newArr.pop(9) // remove the element fron array.
console.log(newArr);

newArr.unshift(2) // add the element at start.
console.log(newArr);
newArr.shift(2) // add the element at start.
console.log(newArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr1 = newArr.join(); // it will convert into string
console.log(newArr);
console.log(newArr1);

// slice & splice
console.log("A ", newArr);
const myn1 = newArr.slice(1,3);
console.log(myn1);

console.log("B ", newArr);
const myn2 = newArr.splice(1,3); // splice cut the array from given range, its range upto.
console.log(myn2);
console.log(newArr);