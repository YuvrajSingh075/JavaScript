function one(){
    const username = "Hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
one();

if(true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//******************************Instresting**********************************
console.log(addOne(5));
function addOne(num1){
    return num1 + 1;
} 


// console.log(addtwo(5));  // this is not valid assign.
const addtwo = function(num2){
    return num2 + 1;
} 
console.log(addtwo(5));