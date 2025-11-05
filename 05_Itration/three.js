// for-of loop-
const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(`value of arr is : ${num}`);
}

const greetings = "Good Morning";
for (const greet of greetings){
    if(greet==" "){
        continue;
    }
    console.log(`great is ${greet}`)
    
}
//Maps-
const map = new Map();
map.set('IN', "India")
map.set('USA', "untied state of america")
map.set('SA',"south africa")
map.set('IN', "India")

console.log(map);

for (const [key, values] of map){
    console.log(key, ' : ', values);
}

// forof loop does not work on objects;