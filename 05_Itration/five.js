const coding = ["js", "c++", "java", "ruby", "swift"];

// coding.forEach(function (val){   // Normal Function used in foreach;
//     console.log(val)
// })

coding.forEach( (item)=>{  // Arrow function used in foreach;
    console.log(item)
})

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme);


//[{},{},{}]
//[(),(),()]

coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
})

const myCoding =[
    {
        languageName: "JavaScript",
        fileExtenion: "js"
    },
    {
        languageName: "C++",
        fileExtenion: "cpp"
    },
    {
        languageName: "python",
        fileExtenion: "py"
    },
    {
        languageName: "java",
        fileExtenion: "java"
    },
]
myCoding.forEach((item) =>{
    console.log(item.languageName, item.fileExtenion);
})



